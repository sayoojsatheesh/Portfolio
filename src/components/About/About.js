// MUI //
import Grid from "@mui/material/Grid";
// CSS //
import classes from "./About.module.css";
// Other //
import { v4 as uuidv4 } from 'uuid';

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
    <div className={classes.AboutMainContainer}>
      <h2 className={classes.Heading}>ABOUT ME</h2>
      <Grid container columnSpacing={10}>
        <Grid item xs={12} sm={7}>
          <h5>Get to Know Me</h5>
          <p>
            <b>I</b>'m a Computer Science graduate with a B.Tech degree,
            possessing
            <b> 1.9 </b>years of experience as a software developer. My primary
            focus lies in crafting user-friendly and aesthetically appealing
            websites. Although I have predominantly worked on the frontend, I
            also possess a solid understanding of backend technologies. I am
            currently <b>open</b> to new opportunities.
          </p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <h5>My Tech Stack</h5>
          <div className={classes.TechStackContainer}>
            {imageURL.map((url) => (
              <img key ={uuidv4()} src={url} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
