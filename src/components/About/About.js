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
];

const About = () => {
  return (
    <div id="about" className={classes.AboutMainContainer}>
      <h2 className={classes.Heading}>ABOUT ME</h2>
      <Grid container columnSpacing={10}>
        <Grid item xs={12} sm={7}>
          <h5>Get to Know Me</h5>
          <p>
            <b>I</b> hold a B.Tech degree in Computer Science and bring with me
            over 1 year of experience as a software developer. My expertise lies
            in the development of user-friendly and visually compelling
            websites. While my primary focus has been on frontend technologies,
            I also have a comprehensive understanding of backend technologies.
            Currently, I am actively seeking new opportunities to contribute my
            skills and knowledge in a dynamic professional environment.
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
