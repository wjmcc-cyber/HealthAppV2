-- PhysiqueAI MVP PostgreSQL Schema

-- 1. PROFILES TABLE
-- Extends auth.users to store application-specific data.
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT,
  age INTEGER,
  height_cm NUMERIC,
  weight_kg NUMERIC,
  unit_system TEXT DEFAULT 'metric' CHECK (unit_system IN ('metric', 'imperial')),
  goal TEXT,
  experience_level TEXT,
  equipment_access TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Turn on RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

-- Create a trigger to automatically create a profile when a new auth user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- 2. EXERCISES TABLE
-- A global dictionary of exercises available in the app.
CREATE TABLE public.exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  target_muscle TEXT,
  equipment_required TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- 3. WORKOUT_PLANS TABLE
-- A high-level plan assigned to a user (e.g., "12-Week Hypertrophy").
CREATE TABLE public.workout_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.workout_plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own plans" ON public.workout_plans FOR ALL USING (auth.uid() = user_id);


-- 4. WORKOUT_SESSIONS TABLE
-- An individual daily workout event linked to a plan.
CREATE TABLE public.workout_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID REFERENCES public.workout_plans(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  scheduled_for DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.workout_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own sessions" ON public.workout_sessions FOR ALL USING (auth.uid() = user_id);


-- 5. SESSION_LOGS TABLE
-- Granular tracking of sets, reps, and weight lifted per exercise within a session.
CREATE TABLE public.session_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.workout_sessions(id) ON DELETE CASCADE NOT NULL,
  exercise_id UUID REFERENCES public.exercises(id) ON DELETE CASCADE NOT NULL,
  set_number INTEGER NOT NULL,
  reps INTEGER NOT NULL,
  weight_kg NUMERIC,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.session_logs ENABLE ROW LEVEL SECURITY;
-- For session_logs, we need to join gracefully or rely on the parent session being owned by the user.
-- A simpler MVP approach is to allow RLS if the associated session belongs to the requesting user:
CREATE POLICY "Users can manage own session logs" ON public.session_logs 
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.workout_sessions 
    WHERE public.workout_sessions.id = session_logs.session_id 
    AND public.workout_sessions.user_id = auth.uid()
  )
);


-- 6. NUTRITION_LOGS TABLE
-- Daily tracking of food consumption and macros.
CREATE TABLE public.nutrition_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  food_name TEXT NOT NULL,
  calories NUMERIC NOT NULL,
  protein_g NUMERIC DEFAULT 0,
  carbs_g NUMERIC DEFAULT 0,
  fat_g NUMERIC DEFAULT 0,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.nutrition_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own nutrition" ON public.nutrition_logs FOR ALL USING (auth.uid() = user_id);


-- 7. BODY_SCANS TABLE
-- Tracking progression and associated images.
CREATE TABLE public.body_scans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  front_image_url TEXT,
  side_image_url TEXT,
  back_image_url TEXT,
  weight_kg NUMERIC,
  body_fat_estimate NUMERIC,
  lean_mass_kg NUMERIC,
  notes TEXT,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.body_scans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own scans" ON public.body_scans FOR ALL USING (auth.uid() = user_id);

-- SEED DATA
-- Insert some basic exercises to get started
INSERT INTO public.exercises (name, target_muscle, equipment_required) VALUES
('Barbell Bench Press', 'Chest', 'Barbell'),
('Incline Dumbbell Press', 'Chest', 'Dumbbells'),
('Pull-ups', 'Back', 'Bodyweight'),
('Barbell Squat', 'Legs', 'Barbell'),
('Romanian Deadlift', 'Hamstrings', 'Barbell'),
('Overhead Press', 'Shoulders', 'Barbell'),
('Dumbbell Lateral Raise', 'Shoulders', 'Dumbbells'),
('Bicep Curl', 'Biceps', 'Dumbbells'),
('Tricep Extension', 'Triceps', 'Cable');
