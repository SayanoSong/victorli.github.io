"use client";
import { ThemeSwitcher } from "../components/theme-switcher";
import NameCard from "../components/name-card";
import Navigator from "@/components/nav-bar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import { workData, educationData } from "@/data/experience-data";
import ResumeLink from "@/components/resume-link";
import { projectData } from "@/data/project-data";
import { Image, Link } from "@nextui-org/react";
import GmailIcon from "../asset/gmail.png";
import linkedIcon from "@/asset/linkedin.png";
import phoneIcon from "@/asset/phone.png";
export default function Home() {
  return (
    <>
      <div className="lg:grid lg:gap-4 lg:grid-cols-2 px-6 max-w-screen-xl mx-auto">
        <div className="lg:sticky lg:top-0 max-h-screen flex flex-col py-12  h-max ">
          <NameCard></NameCard>
          <Navigator></Navigator>
          <div className="grid grid-cols-1 mt-2">
            <div className="flex">
              <Image width={32} src={phoneIcon.src} alt="phoneIcon"></Image>
              <p className="text-base font-serif ml-2">1-(613)-261-1647</p>
            </div>
            <div className="flex items-center">
              <Image width={32} src={GmailIcon.src} alt="gmailIcon"></Image>
              <p className="text-base font-serif ml-2">miku2336@gmail.com</p>
            </div>
            <div className="flex">
              <Image width={32} src={linkedIcon.src} alt="linkedInIcon"></Image>
              <Link
                isExternal
                showAnchorIcon
                href="https://www.linkedin.com/in/XiayuLimiku2336/"
                className="text-base font-serif ml-2 dark:text-white"
              >
                Victor Li
              </Link>
            </div>
          </div>
        </div>
        <div>
          <About id="about"></About>
          <Experience id="experience" workData={workData}></Experience>
          <Education id="education" schoolData={educationData}></Education>
          <ResumeLink></ResumeLink>
          <Projects id="projects" projectData={projectData}></Projects>
        </div>
      </div>
      <ThemeSwitcher></ThemeSwitcher>
    </>
  );
}
