// about section interface

export interface IAboutData {
  id: number;
  title: string;
  about: string;
  icon: any;
}

// resume data interface
export interface IResumeData {
  id: number;
  name: string;
  level: string;
  icon: any;
}

// for projects
// my categories
export type category = "JQuery" | "React" | "Vue" | "React Native";
//project interface
export interface IProject {
  id: number;
  name: string;
  description: string;
  img_path: string;
  depolyed_url: string;
  github_url: string;
  category: category[];
  key_tech: string[];
}
