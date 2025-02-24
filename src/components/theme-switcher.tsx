"use client";

import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@/data/theme-swticher-data";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeBtn = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };

  return (
    <div className="sticky bottom-0 w-fit">
      <Switch
        isSelected={theme === "light"}
        color="secondary"
        size="md"
        startContent={
          <SunIcon
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
          />
        }
        endContent={
          <MoonIcon
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
          />
        }
        onChange={handleThemeBtn}
      ></Switch>
    </div>
  );
}
