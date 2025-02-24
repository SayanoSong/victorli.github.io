"use client";
import { Element } from "react-scroll";
import { AboutProps } from "@/authentication/interfaces";
import { aboutData } from "@/data/about-data";
export default function About(props: AboutProps) {
  return (
    <Element className="flex flex-col my-10" id={props.id} name={props.id}>
      {aboutData.map((val, key) => {
        return (
          <p className="base text-balance font-serif mt-2" key={key}>
            {val}
          </p>
        );
      })}
    </Element>
  );
}
