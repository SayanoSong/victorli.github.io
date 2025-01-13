"use client";
import { Link } from "@nextui-org/react";
import pdf from "@/asset/VictorLiResume.pdf";
export default function ResumeLink() {
  return (
    <div className="mb-10">
      <Link
        isExternal
        isBlock
        showAnchorIcon
        underline="hover"
        href={pdf}
        className="text-blue-100 dark:text-yellow"
      >
        View Full Résumé
      </Link>
    </div>
  );
}
