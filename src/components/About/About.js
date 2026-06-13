import classes from "./About.module.css";

const stats = [
  { value: "4+", label: "Years Full-Stack Experience" },
  { value: "10+", label: "Production-Ready Projects" },
  { value: "250+", label: "DSA Problems Solved" },
  { value: "AWS", label: "Cloud & Deployment Experience" },
];

const highlights = [
  "Building production-grade SaaS applications",
  "React.js, Next.js & TypeScript development",
  "Node.js APIs & full-stack architecture",
  "PostgreSQL & MongoDB database design",
  "AWS EC2, S3 & CI/CD deployments",
  "Performance optimization & scalable systems",
];

const currentFocus = [
  "Incident management platform features",
  "Reusable UI components & workflow forms",
  "Notification systems & live dashboards",
];

const techCategories = [
  {
    label: "Frontend",
    items: ["javascript", "typescript", "react", "nextjs", "html", "css", "materialui"],
  },
  {
    label: "Backend",
    items: ["nodejs", "express"],
  },
  {
    label: "Database",
    items: ["postgres", "mongodb"],
  },
  {
    label: "Tools & Cloud",
    items: ["aws", "github"],
  },
];

const About = () => {
  return (
    <section id="about" className={classes.aboutSection}>
      <div className="section-inner">
      <header className="section-header">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">What I do</h2>
        <p className="section-lead">
          Full-Stack Engineer focused on building reliable, maintainable web
          applications — from polished UIs to scalable backend systems.
        </p>
      </header>

      <div className={classes.statsGrid}>
        {stats.map((item) => (
          <div key={item.label} className={classes.statCard}>
            <span className={classes.statValue}>{item.value}</span>
            <span className={classes.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={classes.contentGrid}>
        <div className={classes.mainColumn}>
          <article className={classes.card}>
            <h3 className={classes.cardTitle}>Overview</h3>
            <p className={classes.summary}>
              I work across the full stack — frontend, backend, databases, and
              cloud — with a focus on clean architecture and shipping
              production-ready software.
            </p>

            <div className={classes.currentRole}>
              <span className={classes.roleLabel}>Currently</span>
              <p className={classes.company}>
                Full-Stack Engineer at{" "}
                <strong>Zeazonz Technologies</strong>
              </p>
              <ul className={classes.focusList}>
                {currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className={classes.card}>
            <h3 className={classes.cardTitle}>Key Highlights</h3>
            <ul className={classes.highlightList}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <aside className={classes.sideColumn}>
          <article className={classes.card}>
            <h3 className={classes.cardTitle}>Tech Stack</h3>
            <div className={classes.techCategories}>
              {techCategories.map((category) => (
                <div key={category.label} className={classes.techCategory}>
                  <h4 className={classes.techCategoryLabel}>
                    {category.label}
                  </h4>
                  <div className={classes.techGrid}>
                    {category.items.map((item) => (
                      <div key={item} className={classes.techItem}>
                        <img
                          src={`https://skillicons.dev/icons?i=${item}`}
                          alt={item}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </div>
      </div>
    </section>
  );
};

export default About;
