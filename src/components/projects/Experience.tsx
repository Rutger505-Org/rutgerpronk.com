interface ExperienceProps {
  title: string;
  location: string;
}

export default function Experience({
  title,
  location,
}: Readonly<ExperienceProps>) {
  return (
    <div>
      <h4 className="text-3xl text-textPrimary">{title}</h4>
      <p className="text-xl text-textSecondary">{location}</p>
    </div>
  );
}
