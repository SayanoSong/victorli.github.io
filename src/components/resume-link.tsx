"use client";
import { Link } from "@nextui-org/react";
export default function ResumeLink() {
  return (
    <div className="mb-10">
      <Link
        isExternal
        isBlock
        showAnchorIcon
        underline="hover"
        href="https://nbviewer.org/github/SayanoSong/victorli.github.io/blob/master/src/asset/VictorLiResume.pdf"
        className="text-blue-100 dark:text-yellow"
        target="_blank"
      >
        View Full Résumé
      </Link>
    </div>
  );
}
