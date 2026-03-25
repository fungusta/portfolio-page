export type BoardCategory = 'about' | 'experiences' | 'projects' | 'interests';

export interface BoardItem {
  id: string;
  title: string;
  category: BoardCategory;
  images: string[];
  caption: string;
  rotation: number;
  content: AboutContent | ExperiencesContent | ProjectsContent | InterestsContent;
}

export interface AboutContent {
  type: 'about';
  bio: string;
}

export interface ExperiencesContent {
  type: 'experiences';
  experiences: WorkExperience[];
}

export interface WorkExperience {
  company: string;
  role: string;
  logo: string;
  link?: string;
  duration?: string;
  description?: string;
  achievements?: string[];
  techStack?: TechItem[];
}

export interface TechItem {
  name: string;
  icon: string;
  link?: string;
}

export interface ProjectsContent {
  type: 'projects';
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link?: string;
  coreStack?: TechItem[];
  infraServices?: ServiceItem[];
}

export interface ServiceItem {
  name: string;
  link?: string;
}

export interface InterestsContent {
  type: 'interests';
  interests: Interest[];
}

export interface Interest {
  name: string;
  description: string;
  image: string;
}

export interface ContactBadge {
  icon: React.ReactNode;
  label: string;
  link: string;
  rotation: number;
}
