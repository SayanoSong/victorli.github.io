import { nameCardData } from "@/data/name-card-data";

export default function NameCard() {
  return (
    <div
      color="purple"
      className="flex flex-col glow:text-glow/50 glow:bg-red-100"
    >
      <p className="text-4xl font-serif font-bold ">{nameCardData.fullName}</p>
      <p className="text-xl font-serif font-medium mt-2">
        {nameCardData.title}
      </p>
      {nameCardData.descriptions.map((description) => {
        return (
          <p className="base font-serif mt-2" key={description}>
            {description}
          </p>
        );
      })}
    </div>
  );
}
