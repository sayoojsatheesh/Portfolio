// CSS
import classes from "./TechStackInfiniteScroll.module.css";
// Other //
import { v4 as uuidv4 } from "uuid";

const TechStackInfiniteScroll = ({ techStack }) => {
  return (
    <div
      className={`${classes.scroll} ${classes.imgBox}`}
      style={{ "--time": "40s" }}
    >
      <div>
        {techStack.map((url) => (
          <img key={uuidv4()} src={url} alt="" />
        ))}
      </div>
      <div>
        {techStack.map((url) => (
          <img key={uuidv4()} src={url} alt="" />
        ))}
      </div>
    </div>
  );
};

export default TechStackInfiniteScroll;
