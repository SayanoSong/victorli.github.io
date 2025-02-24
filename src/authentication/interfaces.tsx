import * as propTypes from "./types";

export interface AboutProps {
  id: string;
}

export interface EducationProps {
  id: string;
  schoolData: propTypes.schoolDataType;
}

export interface ExperienceProps {
  id: string;
  workData: propTypes.workDataType[];
}

export interface ProjectsProps {
  id: string;
  projectData: propTypes.projectDataType[];
}
