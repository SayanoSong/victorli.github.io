export default function NameCard() {
  const fullName = "Xiayu Li";
  const title = "Full Stack Developer";
  const description =
    "Language is not a barrier to learning, and passion is the greatest driving force.";

  return (
    <div
      color="purple"
      className="flex flex-col glow:text-glow/50 glow:bg-red-100"
    >
      <p className="text-4xl font-serif font-bold ">{fullName}</p>
      <p className="text-xl font-serif font-medium mt-2">{title}</p>
      <p className="base font-serif mt-2">{description}</p>
    </div>
  );
}
