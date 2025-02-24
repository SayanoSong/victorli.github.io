"use client";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { sections } from "@/data/nav-data";

export default function Navigator() {
  const spanStyle =
    "inline-block rounded-full mr-2 transition-all group-hover:w-16 group-focus-visible: w-9 group-focus-visible: h-1 group-focus-visible: bg-blue-100";
  const selectedSpanStyle =
    " inline-block rounded-full mr-2 group-focus-visible: w-16 group-focus-visible: h-1 group-focus-visible: bg-blue-100";
  const [currSection, setCurrSection] = useState("");

  const handleClickSection = (section: string) => {
    setCurrSection(section);
  };
  useEffect(() => {
    if (sections.length < 1) {
      return;
    }
    setCurrSection(sections[0]);
    const scroll = () => {
      for (let index = 0; index < sections.length; index++) {
        const sectionId: string = sections[index];
        const section = document.getElementById(sectionId);
        if (section) {
          const bottomY = section.offsetTop + section.offsetHeight;
          const offset = window.innerHeight / 15;
          if (bottomY - offset < window.scrollY) {
            if (index + 1 >= sections.length) {
              setCurrSection(sectionId);
            } else {
              setCurrSection(sections[index + 1]);
            }
          } else {
            setCurrSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
    };
  }, []);

  return (
    <Navbar
      className="mt-12 hidden lg:flex dark:bg-blue-400 bg-silver"
      height={"fix-content"}
      id="nav"
    >
      <NavbarContent className="flex flex-col items-start  ">
        <NavbarItem className="group py-3" isActive={currSection === "about"}>
          <Link
            href="About"
            activeClass="active"
            to="about"
            duration={500}
            delay={100}
            smooth={true}
            spy={true}
            onSetActive={() => {
              handleClickSection("about");
            }}
          >
            <span
              className={
                currSection === "about" ? selectedSpanStyle : spanStyle
              }
            ></span>
            About
          </Link>
        </NavbarItem>
        <NavbarItem
          className="group py-3"
          isActive={currSection === "experience"}
        >
          <Link
            href="Experience"
            activeClass="active"
            to="experience"
            duration={500}
            delay={100}
            smooth={true}
            spy={true}
            onSetActive={() => {
              handleClickSection("experience");
            }}
          >
            <span
              className={
                currSection === "experience" ? selectedSpanStyle : spanStyle
              }
            ></span>
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem
          className="group py-3"
          isActive={currSection === "education"}
        >
          <Link
            href="Education"
            activeClass="active"
            to="education"
            duration={500}
            delay={100}
            smooth={true}
            spy={true}
            onSetActive={() => {
              handleClickSection("education");
            }}
          >
            <span
              className={
                currSection === "education" ? selectedSpanStyle : spanStyle
              }
            ></span>
            Education
          </Link>
        </NavbarItem>
        <NavbarItem
          className="group py-3"
          isActive={currSection === "projects"}
        >
          <Link
            href="Projects"
            activeClass="active"
            to="projects"
            duration={500}
            delay={100}
            smooth={true}
            spy={true}
            onSetActive={() => {
              handleClickSection("projects");
            }}
          >
            <span
              className={
                currSection === "projects" ? selectedSpanStyle : spanStyle
              }
            ></span>
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
