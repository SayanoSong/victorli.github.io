"use client";
import { Element } from "react-scroll";
import { Chip } from "@nextui-org/react";
interface ExperienceProps {
  id: string;
  workData: workDataType[];
}

type workDataType = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
  tags?: string[];
};

export default function Experience(props: ExperienceProps) {
  return (
    <Element
      className="flex flex-col my-10 bg-rice"
      id={props.id}
      name={props.id}
    >
      <p className="text-lg font-serif mb-2 font-bold">Experience</p>
      {props.workData.map(
        (
          { title, company, location, startDate, endDate, details, tags },
          key
        ) => {
          return (
            <div
              key={key}
              className="grid grid-cols-5 mb-5 items-center shadow-md p-2 rounded-lg bg-white dark:bg-gray"
            >
              <div className="col-span-2 base font-serif">{title}</div>
              <div className="col-start-5 col-span-1 text-xs font-serif justify-self-end">
                {startDate} - {endDate}
              </div>
              <div className="col-span-5 text-sm font-serif">
                {company}, {location}
              </div>
              <div className="col-span-5">
                {details.map((value, key) => (
                  <p className="col-span-5 text-sm font-serif" key={key}>
                    {`\u2023 ${value}`}
                  </p>
                ))}
              </div>
              <div className="col-span-5 flex flex-wrap mt-2">
                {tags &&
                  tags.map((value) => (
                    <div key={value} className="mr-2">
                      <Chip
                        radius="lg"
                        color="secondary"
                        variant="flat"
                        className="dark:text-white"
                      >
                        {value}
                      </Chip>
                    </div>
                  ))}
              </div>
            </div>
          );
        }
      )}
    </Element>
  );
}
