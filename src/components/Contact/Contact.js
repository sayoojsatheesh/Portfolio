// CSS
import classes from "./Contact.module.css";
// Components
import CustomContactCard from "./CustomContactCard/CustomContactCard";
// MUI Icons
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const contactItems = [
    {
      icon: <MapIcon className={classes.icon} />,
      heading: "Location",
      details: "Kerala, India",
    },
    {
      icon: <EmailIcon className={classes.icon} />,
      heading: "Mail",
      details: "sayoojsatheesh.dev@gmail.com",
      link: "mailto:sayoojsatheesh.dev@gmail.com",
    },
  ];

  return (
    <section id="contact" className={classes.contactSection}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h3 className={classes.title}>CONTACT</h3>
          <h2 className={classes.subtitle}>Feel Free to Hit Me Up 👇</h2>
        </div>

        <div className={classes.cardsWrapper}>
          {contactItems.map((item, index) => (
            <CustomContactCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
