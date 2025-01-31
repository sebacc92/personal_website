export interface Project {
  id: number;
  title: string;
  description: {
    en: string;
    es: string;
  };
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

export type Language = 'en' | 'es';
export type Theme = 'dark' | 'light';