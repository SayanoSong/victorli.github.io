"use client";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <>
      <div className="lg:grid lg:gap-4 lg:grid-cols-2 px-6 max-w-screen-xl mx-auto"></div>
      <ThemeSwitcher></ThemeSwitcher>
    </>
  );
}
