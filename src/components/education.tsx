"use client";
import { Element } from "react-scroll";
import { EducationProps } from "@/authentication/interfaces";
import { schoolDataType } from "@/authentication/types";

export default function Education(props: EducationProps) {
  const schoolObj: schoolDataType = props.schoolData;
  return (
    <Element className="flex flex-col my-5" id={props.id} name={props.id}>
      <p className="text-lg font-serif font-bold mb-2">Education</p>
      <div className="grid grid-cols-5 mb-5 items-center shadow-md p-2 rounded-lg bg-white dark:bg-gray">
        <div className="col-span-2 base font-serif">{schoolObj.school}</div>
        <div className="col-start-5 col-span-1 text-xs font-serif justify-self-end">
          {schoolObj.startDate} - {schoolObj.endDate}
        </div>
        <div className="col-span-5 text-sm font-serif">
          {schoolObj.location}
        </div>
        <div className="col-span-5">
          {schoolObj.details.map((value, key) => (
            <p className="col-span-5 text-sm font-serif" key={key}>
              {`\u2023 ${value}`}
            </p>
          ))}
        </div>
      </div>
    </Element>
  );
}
