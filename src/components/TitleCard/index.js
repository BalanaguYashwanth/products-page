import { shortText } from "../../utils/helpers";
import styles from "./TitleCard.module.scss";

const TitleCard = ({ title }) => {
  return (
    <article className={styles.container}>
      <h3 className={styles.subHeader}>
        {shortText({ text: title, limit: 11 })}
      </h3>
      <p>{"Updated 5mins ago"}</p>
    </article>
  );
};

export default TitleCard;
