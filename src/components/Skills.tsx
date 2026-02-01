const skills = [
  "Compliance Management",
  "Information System Audit",
  "Data Analysis",
  "Internal Auditing",
  "Risk Assessment",
  "Financial Risk Management",
  "Internal Controls Review",
  "Pre-Audit Procedures",
  "Asset Verification",
  "Vendor Payment Audits",
  "Stock & Cash Counts",
  "Purchase Order Review",
  "ACCA",
  "Accounting & Finance",
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-12">
      <h2 className="mb-8 font-serif text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-xs text-text-muted shadow-sm transition-colors hover:border-accent hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
