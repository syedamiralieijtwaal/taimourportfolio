const experiences = [
  {
    date: "2023 — Present",
    title: "Senior Internal Auditor",
    company: "Eplanet Global Pakistan",
    location: "Karachi, Sindh, Pakistan",
    description: "",
  },
  {
    date: "2022 — 2023",
    title: "Internal Auditor",
    company: "Chase Up",
    location: "Karachi, Sindh, Pakistan",
    description: "",
  },
  {
    date: "2020 — 2022",
    title: "Internal Auditor",
    company: "Jazaa Foods (Pvt) Ltd by Junaid Jamshed",
    location: "Karachi, Sindh, Pakistan",
    description:
      "Identifying business and financial risk faced by the entity. Reviewing existing internal controls to mitigate risk. Performing pre-audit of purchase orders, GRNs, invoices, location transfers, and delivery plans. Conducting asset counting and tagging for head office and factory warehouse. Pre-audit of vendor payments. Surprise stock and cash counts. Discussing discrepancies with process owners.",
  },
  {
    date: "Jan — Apr 2020",
    title: "Audit Intern",
    company: "KPMG Lower Gulf",
    location: "United Arab Emirates",
    description:
      "Assurance internship working on various clients including logistics, real estate & investment, contracting, and furniture companies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-12">
      <h2 className="mb-8 font-serif text-2xl font-bold">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.date + exp.company}
            className="rounded-xl border border-border bg-bg-card p-5 shadow-sm transition-all hover:shadow-md border-l-4 border-l-accent"
          >
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <span className="font-mono text-xs text-text-muted pt-0.5">
                {exp.date}
              </span>
              <div>
                <h3 className="text-base font-semibold">{exp.title}</h3>
                <p className="font-serif text-sm text-accent">{exp.company}</p>
                <p className="text-xs text-text-muted">{exp.location}</p>
                {exp.description && (
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
