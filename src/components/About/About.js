// MUI
import Grid from "@mui/material/Grid";
// CSS
import classes from "./About.module.css";

const techStack = [
  "js",
  "react",
  "next",
  "nodejs",
  "express",
  "postgres",
  "mongodb",
  "aws",
  "materialui",
  "github",
  "html",
  "css",
];

const About = () => {
  return (
    <div id="about" className={classes.AboutMainContainer}>
      <h2 className={classes.SectionTitle}>About Me</h2>

      <Grid container spacing={6} alignItems="center">
        {/* LEFT SIDE */}
        <Grid item xs={12} md={7}>
          <h3 className={classes.SubTitle}>Who I Am</h3>

          <p className={classes.Description}>
            I’m a <b>Frontend-Focused Full-Stack Developer</b> with 
            3.5 years of experience building fast, scalable and 
            user-centric web applications. I specialize in 
            <b> React, Next.js, Node.js</b>, and modern UI engineering.
          </p>

          <p className={classes.Description}>
            Currently at <b>Zeazonz Technologies</b>, I build 
            production-ready features for an incident management platform —
            improving performance, reliability, and user experience.
          </p>

          <p className={classes.Description}>
            My work includes real-time dashboards, live tracking systems,
            optimized APIs, reusable UI components, and cloud-ready 
            architectures. I’m passionate about clean code, system thinking, 
            and shipping meaningful products.
          </p>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={5}>
          <h3 className={classes.SubTitle}>Tech Stack</h3>

          <div className={classes.TechGrid}>
            {techStack.map((item) => (
              <div key={item} className={classes.TechItem}>
                <img
                  src={`https://skillicons.dev/icons?i=${item}`}
                  alt={item}
                />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
