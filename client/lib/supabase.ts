import { createClient } from "@supabase/supabase-js";

// Netlify-optimized Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Production-ready validation for Netlify
const isValidConfig = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "⚠️ Supabase configuration missing. Running in fallback mode.",
    );
    return false;
  }

  if (
    supabaseUrl === "your-supabase-url" ||
    supabaseAnonKey === "your-supabase-anon-key"
  ) {
    console.warn("⚠️ Please update Supabase credentials. Using fallback mode.");
    return false;
  }

  if (!supabaseUrl.includes("supabase.co")) {
    console.warn("⚠️ Invalid Supabase URL format. Using fallback mode.");
    return false;
  }

  return true;
};

// Create Supabase client with error handling
export const supabase = isValidConfig()
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // Optimized for static sites like Netlify
      },
    })
  : null;

// Database connection status
export const isSupabaseConnected = () => supabase !== null;

// Database schema types
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  description: string;
  color: "gdsc-blue" | "gdsc-red" | "gdsc-yellow" | "gdsc-green";
  attendees: number;
  image?: string;
  registration_link?: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: "workshop" | "event" | "competition" | "community";
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  github_url?: string;
  live_url?: string;
  tech_stack: string[];
  category: "web" | "mobile" | "ai" | "blockchain" | "iot" | "other";
  status: "completed" | "in_progress" | "planned";
  team_members: string[];
  display_order: number;
  created_at: string;
  updated_at: string;
}

// Enhanced mock data for development and fallback
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Introduction to Machine Learning",
    date: "Dec 15, 2024",
    time: "2:00 PM - 5:00 PM",
    type: "Workshop",
    description:
      "Learn the fundamentals of ML with hands-on exercises using Python and popular libraries like scikit-learn.",
    color: "gdsc-blue",
    attendees: 85,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    registration_link: "https://forms.google.com/ml-workshop",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Android Development Bootcamp",
    date: "Dec 20, 2024",
    time: "10:00 AM - 4:00 PM",
    type: "Bootcamp",
    description:
      "Build your first Android app from scratch using Kotlin and Android Studio.",
    color: "gdsc-green",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800",
    registration_link: "https://forms.google.com/android-bootcamp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Web Development with React",
    date: "Dec 25, 2024",
    time: "1:00 PM - 6:00 PM",
    type: "Workshop",
    description:
      "Modern web development using React, TypeScript, and best practices for building scalable applications.",
    color: "gdsc-red",
    attendees: 95,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    registration_link: "https://forms.google.com/react-workshop",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Cloud Computing with Google Cloud",
    date: "Jan 5, 2025",
    time: "3:00 PM - 6:00 PM",
    type: "Workshop",
    description:
      "Explore Google Cloud Platform services and deploy your applications to the cloud.",
    color: "gdsc-yellow",
    attendees: 67,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    registration_link: "https://forms.google.com/gcp-workshop",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Atharv Garg",
    role: "Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Passionate about full-stack development and community building. Leading GDGoC IET DAVV with focus on creating an inclusive tech environment.",
    linkedin: "https://linkedin.com/in/atharv-garg",
    github: "https://github.com/atharv-garg",
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Sarah Kumar",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    bio: "Specializes in machine learning and data science. Loves organizing workshops and helping others learn new technologies.",
    linkedin: "https://linkedin.com/in/sarah-kumar",
    github: "https://github.com/sarah-kumar",
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Rahul Sharma",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "UI/UX designer with expertise in creating intuitive user experiences. Passionate about design systems and accessibility.",
    linkedin: "https://linkedin.com/in/rahul-sharma",
    github: "https://github.com/rahul-sharma",
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const mockGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Web Development Workshop",
    description:
      "Students learning React and modern web technologies in our intensive workshop session.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    date: "2024-11-15",
    category: "workshop",
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Community Meetup",
    description:
      "Our monthly community gathering and networking event with industry professionals.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
    date: "2024-11-20",
    category: "community",
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Coding Competition",
    description:
      "Annual coding competition with exciting challenges and prizes for participants.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800",
    date: "2024-10-25",
    category: "competition",
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const mockProjects: Project[] = [
  {
    id: "1",
    title: "GDGoC Website",
    description:
      "Modern, responsive website for our community built with React and TypeScript. Features admin panel, event management, and community showcase.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    github_url: "https://github.com/gdgoc-iet-davv/website",
    live_url: "https://gdgoc-iet-davv.netlify.app",
    tech_stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Netlify"],
    category: "web",
    status: "completed",
    team_members: ["Atharv Garg", "Sarah Kumar", "Rahul Sharma"],
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Event Management App",
    description:
      "Mobile app for managing community events and registrations with real-time notifications and QR code check-ins.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    github_url: "https://github.com/gdgoc-iet-davv/event-app",
    tech_stack: ["React Native", "Firebase", "Node.js", "Express"],
    category: "mobile",
    status: "in_progress",
    team_members: ["Tech Team", "Mobile Development Squad"],
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "AI Study Buddy",
    description:
      "Machine learning powered study assistant that helps students with personalized learning paths and progress tracking.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    github_url: "https://github.com/gdgoc-iet-davv/ai-study-buddy",
    tech_stack: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    category: "ai",
    status: "planned",
    team_members: ["AI Team", "Backend Squad"],
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Storage keys for localStorage fallback
const STORAGE_KEYS = {
  events: "gdgoc-events-v2",
  teamMembers: "gdgoc-team-members-v2",
  galleryItems: "gdgoc-gallery-items-v2",
  projects: "gdgoc-projects-v2",
  lastSync: "gdgoc-last-sync",
};

// Enhanced storage helpers with data validation
const getFromStorage = <T>(key: string, defaultData: T[]): T[] => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultData;

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : defaultData;
  } catch (error) {
    console.warn(`Failed to parse stored data for ${key}:`, error);
    return defaultData;
  }
};

const saveToStorage = <T>(key: string, data: T[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(STORAGE_KEYS.lastSync, new Date().toISOString());
  } catch (error) {
    console.error(`Failed to save data to storage for ${key}:`, error);
  }
};

// Enhanced error handling wrapper
const withErrorHandling = async <T>(
  operation: () => Promise<T>,
  fallbackData?: any,
  operationName?: string,
): Promise<{
  success: boolean;
  data?: T;
  error?: string;
  fallback?: boolean;
}> => {
  try {
    const data = await operation();
    return { success: true, data };
  } catch (error: any) {
    console.error(`${operationName || "Operation"} failed:`, error);

    let errorMessage = "An unexpected error occurred";

    // Extract meaningful error message
    if (typeof error === "string") {
      errorMessage = error;
    } else if (error?.message) {
      errorMessage = error.message;
    } else if (error?.error_description) {
      errorMessage = error.error_description;
    } else if (error?.details) {
      errorMessage = error.details;
    }

    // Network-specific error handling for Netlify
    if (errorMessage.includes("fetch") || errorMessage.includes("network")) {
      errorMessage =
        "Network connection failed. Please check your internet connection.";
    }

    // Supabase-specific error handling
    if (errorMessage.includes("JWT") || errorMessage.includes("auth")) {
      errorMessage = "Authentication error. Please check your credentials.";
    }

    if (errorMessage.includes("relation") || errorMessage.includes("table")) {
      console.warn(
        `Database table not found, using fallback data for ${operationName}`,
      );
      return {
        success: true,
        data: fallbackData || [],
        fallback: true,
      };
    }

    return {
      success: false,
      error: errorMessage,
      data: fallbackData || [],
    };
  }
};

// Admin authentication with enhanced security
const ADMIN_PASSWORD = "GDGoC_IET_2024_SecureAdmin#789";

export const checkAdminPassword = (password: string): boolean => {
  return password === ADMIN_PASSWORD;
};

// Events API with comprehensive error handling
export const getEvents = async () => {
  if (!supabase) {
    const data = getFromStorage(STORAGE_KEYS.events, mockEvents);
    return { success: true, data, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      return data || [];
    },
    getFromStorage(STORAGE_KEYS.events, mockEvents),
    "Get Events",
  );
};

export const createEvent = async (
  event: Omit<Event, "id" | "created_at" | "updated_at">,
) => {
  if (!supabase) {
    const events = getFromStorage(STORAGE_KEYS.events, mockEvents);
    const newEvent: Event = {
      ...event,
      id: `local_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    events.push(newEvent);
    saveToStorage(STORAGE_KEYS.events, events);
    return { success: true, data: newEvent, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("events")
        .insert([
          {
            ...event,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Create Event",
  );
};

export const updateEvent = async (id: string, updates: Partial<Event>) => {
  if (!supabase) {
    const events = getFromStorage(STORAGE_KEYS.events, mockEvents);
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) return { success: false, error: "Event not found" };

    events[index] = {
      ...events[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    saveToStorage(STORAGE_KEYS.events, events);
    return { success: true, data: events[index], fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("events")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Update Event",
  );
};

export const deleteEvent = async (id: string) => {
  if (!supabase) {
    const events = getFromStorage(STORAGE_KEYS.events, mockEvents);
    const filtered = events.filter((e) => e.id !== id);
    saveToStorage(STORAGE_KEYS.events, filtered);
    return { success: true, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { error } = await supabase.from("events").delete().eq("id", id);
      if (error) throw error;
      return true;
    },
    null,
    "Delete Event",
  );
};

// Team Members API
export const getTeamMembers = async () => {
  if (!supabase) {
    const data = getFromStorage(STORAGE_KEYS.teamMembers, mockTeamMembers);
    return {
      success: true,
      data: data.sort((a, b) => a.display_order - b.display_order),
      fallback: true,
    };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data || [];
    },
    getFromStorage(STORAGE_KEYS.teamMembers, mockTeamMembers),
    "Get Team Members",
  );
};

export const createTeamMember = async (
  member: Omit<TeamMember, "id" | "created_at" | "updated_at">,
) => {
  if (!supabase) {
    const members = getFromStorage(STORAGE_KEYS.teamMembers, mockTeamMembers);
    const newMember: TeamMember = {
      ...member,
      id: `local_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    members.push(newMember);
    saveToStorage(STORAGE_KEYS.teamMembers, members);
    return { success: true, data: newMember, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("team_members")
        .insert([
          {
            ...member,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Create Team Member",
  );
};

export const updateTeamMember = async (
  id: string,
  updates: Partial<TeamMember>,
) => {
  if (!supabase) {
    const members = getFromStorage(STORAGE_KEYS.teamMembers, mockTeamMembers);
    const index = members.findIndex((m) => m.id === id);
    if (index === -1) return { success: false, error: "Team member not found" };

    members[index] = {
      ...members[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    saveToStorage(STORAGE_KEYS.teamMembers, members);
    return { success: true, data: members[index], fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("team_members")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Update Team Member",
  );
};

export const deleteTeamMember = async (id: string) => {
  if (!supabase) {
    const members = getFromStorage(STORAGE_KEYS.teamMembers, mockTeamMembers);
    const filtered = members.filter((m) => m.id !== id);
    saveToStorage(STORAGE_KEYS.teamMembers, filtered);
    return { success: true, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { error } = await supabase
        .from("team_members")
        .delete()
        .eq("id", id);
      if (error) throw error;
      return true;
    },
    null,
    "Delete Team Member",
  );
};

// Gallery API
export const getGalleryItems = async () => {
  if (!supabase) {
    const data = getFromStorage(STORAGE_KEYS.galleryItems, mockGalleryItems);
    return {
      success: true,
      data: data.sort((a, b) => b.display_order - a.display_order),
      fallback: true,
    };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("display_order", { ascending: false });

      if (error) throw error;
      return data || [];
    },
    getFromStorage(STORAGE_KEYS.galleryItems, mockGalleryItems),
    "Get Gallery Items",
  );
};

export const createGalleryItem = async (
  item: Omit<GalleryItem, "id" | "created_at" | "updated_at">,
) => {
  if (!supabase) {
    const items = getFromStorage(STORAGE_KEYS.galleryItems, mockGalleryItems);
    const newItem: GalleryItem = {
      ...item,
      id: `local_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    items.push(newItem);
    saveToStorage(STORAGE_KEYS.galleryItems, items);
    return { success: true, data: newItem, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("gallery_items")
        .insert([
          {
            ...item,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Create Gallery Item",
  );
};

export const updateGalleryItem = async (
  id: string,
  updates: Partial<GalleryItem>,
) => {
  if (!supabase) {
    const items = getFromStorage(STORAGE_KEYS.galleryItems, mockGalleryItems);
    const index = items.findIndex((i) => i.id === id);
    if (index === -1)
      return { success: false, error: "Gallery item not found" };

    items[index] = {
      ...items[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    saveToStorage(STORAGE_KEYS.galleryItems, items);
    return { success: true, data: items[index], fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("gallery_items")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Update Gallery Item",
  );
};

export const deleteGalleryItem = async (id: string) => {
  if (!supabase) {
    const items = getFromStorage(STORAGE_KEYS.galleryItems, mockGalleryItems);
    const filtered = items.filter((i) => i.id !== id);
    saveToStorage(STORAGE_KEYS.galleryItems, filtered);
    return { success: true, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { error } = await supabase
        .from("gallery_items")
        .delete()
        .eq("id", id);
      if (error) throw error;
      return true;
    },
    null,
    "Delete Gallery Item",
  );
};

// Projects API
export const getProjects = async () => {
  if (!supabase) {
    const data = getFromStorage(STORAGE_KEYS.projects, mockProjects);
    return {
      success: true,
      data: data.sort((a, b) => b.display_order - a.display_order),
      fallback: true,
    };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: false });

      if (error) throw error;
      return data || [];
    },
    getFromStorage(STORAGE_KEYS.projects, mockProjects),
    "Get Projects",
  );
};

export const createProject = async (
  project: Omit<Project, "id" | "created_at" | "updated_at">,
) => {
  if (!supabase) {
    const projects = getFromStorage(STORAGE_KEYS.projects, mockProjects);
    const newProject: Project = {
      ...project,
      id: `local_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    projects.push(newProject);
    saveToStorage(STORAGE_KEYS.projects, projects);
    return { success: true, data: newProject, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("projects")
        .insert([
          {
            ...project,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Create Project",
  );
};

export const updateProject = async (id: string, updates: Partial<Project>) => {
  if (!supabase) {
    const projects = getFromStorage(STORAGE_KEYS.projects, mockProjects);
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return { success: false, error: "Project not found" };

    projects[index] = {
      ...projects[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    saveToStorage(STORAGE_KEYS.projects, projects);
    return { success: true, data: projects[index], fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("projects")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    null,
    "Update Project",
  );
};

export const deleteProject = async (id: string) => {
  if (!supabase) {
    const projects = getFromStorage(STORAGE_KEYS.projects, mockProjects);
    const filtered = projects.filter((p) => p.id !== id);
    saveToStorage(STORAGE_KEYS.projects, filtered);
    return { success: true, fallback: true };
  }

  return withErrorHandling(
    async () => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
      return true;
    },
    null,
    "Delete Project",
  );
};

// Connection test utility
export const testSupabaseConnection = async () => {
  if (!supabase) {
    return { success: false, error: "Supabase client not initialized" };
  }

  return withErrorHandling(
    async () => {
      const { data, error } = await supabase
        .from("events")
        .select("count")
        .limit(1);
      if (error) throw error;
      return { connected: true, timestamp: new Date().toISOString() };
    },
    null,
    "Test Connection",
  );
};
