import TitleCard from "../TitleCard";
import styles from "./Card.module.scss";

const Card = ({ title, image }) => {
  return (
    <main className={styles.container}>
      <article className={styles.center}>
        <img src={image} alt="item" height={100} width={100} />
      </article>

      <TitleCard title={title} />
    </main>
  );
};
export default Card;
