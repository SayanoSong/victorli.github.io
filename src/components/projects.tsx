"use client";
import { ProjectsProps } from "@/authentication/interfaces";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@nextui-org/react";
import { Element } from "react-scroll";

export default function Projects(props: ProjectsProps) {
  return (
    <Element className="flex flex-col mb-20" id={props.id} name={props.id}>
      <p className="text-lg font-serif mb-2 font-bold">Remarkable Projects</p>
      <div>
        {props.projectData.map(({ projectName, description, url, skills }) => {
          return (
            <Card
              key={projectName}
              className="group shadow-md mb-5 rounded-lg bg-white dark:bg-gray dark:text-white"
            >
              <CardHeader className="col-span-2 base font-serif">
                {projectName}
              </CardHeader>
              <Divider></Divider>
              <CardBody>
                <p className="text-sm font-serif">{description}</p>
                <div className="flex flex-wrap mt-5">
                  {skills &&
                    skills.map((value) => (
                      <div key={value} className="mr-2">
                        <Chip
                          size="sm"
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
              </CardBody>
              <Divider></Divider>
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href={url}
                  className="dark:text-white"
                >
                  View source code
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Element>
  );
}
