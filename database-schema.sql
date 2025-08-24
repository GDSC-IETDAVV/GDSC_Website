-- =====================================================
-- GDGoC IET DAVV Complete Database Schema
-- Run this script in Supabase SQL Editor
-- =====================================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABLE DEFINITIONS
-- =====================================================

-- 📅 Events Table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date VARCHAR(50),
  time VARCHAR(50),
  type VARCHAR(100),
  color VARCHAR(50) DEFAULT 'gdsc-blue',
  attendees INTEGER DEFAULT 0,
  registration_link TEXT,
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 👥 Team Members Table
CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  bio TEXT,
  image VARCHAR(500),
  linkedin VARCHAR(500),
  github VARCHAR(500),
  twitter VARCHAR(500),
  instagram VARCHAR(500),
  display_order INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 🖼️ Gallery Items Table
CREATE TABLE gallery_items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  image VARCHAR(500) NOT NULL,
  date VARCHAR(50),
  category VARCHAR(100) DEFAULT 'general',
  display_order INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 🚀 Projects Table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  github_url VARCHAR(500),
  live_url VARCHAR(500),
  tech_stack TEXT[],
  category VARCHAR(50) DEFAULT 'web',
  status VARCHAR(50) DEFAULT 'planned',
  team_members TEXT[],
  display_order INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- SAMPLE DATA
-- =====================================================

-- Sample Events
INSERT INTO events (title, description, date, time, type, color, attendees, registration_link) VALUES
('React Workshop', 'Learn React fundamentals and build your first app', 'Jan 15, 2025', '2:00 PM - 5:00 PM', 'Workshop', 'gdsc-blue', 45, 'https://forms.gle/your-form-link'),
('AI/ML Seminar', 'Introduction to Machine Learning with Python', 'Jan 20, 2025', '3:00 PM - 6:00 PM', 'Seminar', 'gdsc-green', 38, 'https://forms.gle/your-form-link'),
('Web Development Bootcamp', 'Complete web development from basics to advanced', 'Jan 25, 2025', '10:00 AM - 4:00 PM', 'Bootcamp', 'gdsc-red', 65, 'https://forms.gle/your-form-link'),
('Mobile App Development', 'Build your first mobile app with React Native', 'Feb 5, 2025', '1:00 PM - 6:00 PM', 'Workshop', 'gdsc-yellow', 30, 'https://forms.gle/your-form-link');

-- Sample Team Members
INSERT INTO team_members (name, role, bio, image, linkedin, github, display_order) VALUES
('Atharv Garg', 'Lead', 'Passionate about full-stack development and community building. Leading GDGoC IET DAVV with vision and dedication.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 'https://linkedin.com/in/atharvgarg', 'https://github.com/atharvgarg', 1),
('Sarah Johnson', 'Technical Lead', 'Expert in machine learning and data science. Mentoring students in AI/ML projects and research.', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400', 'https://linkedin.com/in/sarahjohnson', 'https://github.com/sarahjohnson', 2),
('Rahul Sharma', 'Web Development Lead', 'Full-stack developer specializing in React, Node.js, and cloud technologies. Building scalable web applications.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', 'https://linkedin.com/in/rahulsharma', 'https://github.com/rahulsharma', 3),
('Priya Patel', 'Design Lead', 'UI/UX designer with a passion for creating beautiful and functional user experiences.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', 'https://linkedin.com/in/priyapatel', 'https://github.com/priyapatel', 4);

-- Sample Gallery Items
INSERT INTO gallery_items (title, description, image, date, category, display_order) VALUES
('Annual Tech Conference 2024', 'Our biggest tech event with 200+ attendees and industry experts', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', '2024-11-15', 'event', 1),
('React Workshop Session', 'Hands-on coding workshop teaching React fundamentals', 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800', '2024-11-10', 'workshop', 2),
('Hackathon Winners', 'Celebrating our hackathon champions and their innovative projects', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', '2024-10-28', 'competition', 3),
('Community Meetup', 'Monthly community gathering and networking event', 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800', '2024-10-20', 'community', 4),
('AI Workshop', 'Introduction to artificial intelligence and machine learning', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', '2024-09-15', 'workshop', 5);

-- Sample Projects
INSERT INTO projects (title, description, image, github_url, live_url, tech_stack, category, status, team_members, display_order) VALUES
('GDG On Campus Website', 'Modern, responsive website for our community built with React and TypeScript. Features event management, team showcase, and admin panel.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', 'https://github.com/atharvgarg18/gdgoc-revamped', 'https://gdgoc-iet-davv.netlify.app', ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase'], 'web', 'completed', ARRAY['Atharv Garg', 'Development Team'], 1),
('Event Management App', 'Mobile application for managing community events, registrations, and attendee tracking', 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600', 'https://github.com/gdgoc-iet-davv/event-app', NULL, ARRAY['React Native', 'Firebase', 'Node.js', 'Express'], 'mobile', 'in_progress', ARRAY['Mobile Development Team', 'Backend Team'], 2),
('AI Study Assistant', 'Machine learning powered study assistant for students with personalized recommendations', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600', 'https://github.com/gdgoc-iet-davv/ai-assistant', NULL, ARRAY['Python', 'TensorFlow', 'FastAPI', 'React'], 'ai', 'planned', ARRAY['AI/ML Team', 'Research Group'], 3);

-- =====================================================
-- SECURITY POLICIES (ROW LEVEL SECURITY)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on events" ON events FOR SELECT USING (true);
CREATE POLICY "Allow public read access on team_members" ON team_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access on gallery_items" ON gallery_items FOR SELECT USING (true);
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Create indexes for better query performance
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_team_members_display_order ON team_members(display_order);
CREATE INDEX idx_gallery_items_category ON gallery_items(category);
CREATE INDEX idx_gallery_items_display_order ON gallery_items(display_order);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_display_order ON projects(display_order);

-- =====================================================
-- FUNCTIONS FOR AUTO-UPDATING TIMESTAMPS
-- =====================================================

-- Function to update 'updated_at' column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to automatically update 'updated_at' when records are modified
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_gallery_items_updated_at BEFORE UPDATE ON gallery_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================

-- Run these to verify your setup worked correctly:
-- SELECT COUNT(*) FROM events; -- Should return 4
-- SELECT COUNT(*) FROM team_members; -- Should return 4  
-- SELECT COUNT(*) FROM gallery_items; -- Should return 5
-- SELECT COUNT(*) FROM projects; -- Should return 3
