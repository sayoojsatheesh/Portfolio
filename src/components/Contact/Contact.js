import classes from "./Contact.module.css";
import CustomContactCard from "./CustomContactCard/CustomContactCard";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";

const contactItems = [
  {
    icon: <MapIcon />,
    heading: "Location",
    details: "Kerala, India",
  },
  {
    icon: <EmailIcon />,
    heading: "Email",
    details: "sayoojsatheesh.dev@gmail.com",
    link: "mailto:sayoojsatheesh.dev@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className={classes.contactSection}>
      <div className="section-inner">
        <header className="section-header">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-lead">
            Open to new opportunities and collaborations. Feel free to reach
            out — I&apos;ll get back to you as soon as I can.
          </p>
        </header>

        <div className={classes.cardsWrapper}>
          {contactItems.map((item) => (
            <CustomContactCard key={item.heading} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
