export default function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center mb-5" : "mb-4"}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
