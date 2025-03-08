// MUI //
import Grid from "@mui/material/Grid";
// CSS //
import classes from "./About.module.css";
// Other //
import { v4 as uuidv4 } from "uuid";

let imageURL = [
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=next",
  "https://skillicons.dev/icons?i=nodejs",
  "https://skillicons.dev/icons?i=express",
  "https://skillicons.dev/icons?i=aws",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=materialui",
  "https://skillicons.dev/icons?i=mongodb",
  "https://skillicons.dev/icons?i=postgres",
  "https://skillicons.dev/icons?i=ts",
];

const About = () => {
  return (
    <div id="about" className={classes.AboutMainContainer}>
      <h2 className={classes.Heading}>ABOUT ME</h2>
      <Grid container columnSpacing={10}>
        <Grid item xs={12} sm={7}>
          <h5>Get to Know Me</h5>
          <p>
            <b>I</b> am a Full-Stack Developer with a B.Tech in Computer Science
            and three years of experience building scalable web applications and
            enhancing user experiences. Specializing in React, Next.js, and
            Node.js, I excel at crafting intuitive front-end interfaces and
            developing robust back-end systems for seamless end-to-end
            performance. Currently, I work at Zeazonz Technologies, where I
            contribute to an incident management product designed to streamline
            critical operations. My past achievements include developing
            real-time tracking systems, dynamic dashboards, and high-performance
            web applications using modern technologies like PostgreSQL and
            MongoDB. Passionate about clean code and innovative solutions, I
            thrive on creating impactful digital experiences.
          </p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <h5>My Tech Stack</h5>
          <div className={classes.TechStackContainer}>
            {imageURL.map((url) => (
              <img key={uuidv4()} src={url} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
