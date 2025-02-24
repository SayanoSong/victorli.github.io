export type schoolDataType = {
  school: string;
  degree: string;
  startDate: string;
  location: string;
  endDate: string;
  details: string[];
};

export type workDataType = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
  tags?: string[];
};

export type projectDataType = {
  projectName: string;
  description: string;
  url: string;
  skills?: string[];
};
