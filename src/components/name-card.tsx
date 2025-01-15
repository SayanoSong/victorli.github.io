export default function NameCard() {
  const fullName = "Xiayu Li";
  const title = "Full Stack Developer";
  const description1 = "Language is not a barrier to learning";
  const description2 = "Passion is the greatest driving force";
  return (
    <div
      color="purple"
      className="flex flex-col glow:text-glow/50 glow:bg-red-100"
    >
      <p className="text-4xl font-serif font-bold ">{fullName}</p>
      <p className="text-xl font-serif font-medium mt-2">{title}</p>
      <p className="base font-serif mt-2">{description1}</p>
      <p className="base font-serif mt-2">{description2}</p>
    </div>
  );
}
