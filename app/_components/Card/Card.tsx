import Image from "next/image";
import styles from "./Card.module.css";
import { useState } from "react";
import { CardData } from "@/app/_types/CardType";
import Button from "../Button/Button";

function Card(cardData: CardData) {
  const {
    imageUrl,
    title,
    date,
    time,
    location,
    description,
    onRegister,
    icons,
  } = cardData;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.card}>
      <Image
        quality={100}
        src={imageUrl}
        alt="card image"
        width={400}
        height={300}
        className={styles.image}
      />

      <h2>{title}</h2>

      {date && <span className={styles.date}>Date: {date}</span>}
      {time && <span className={styles.time}>Time: {time}</span>}
      {location && (
        <span className={styles.location}>Location: {location}</span>
      )}
      <p className={styles.description}>
        {description.length > 250
          ? isExpanded
            ? description
            : `${description.slice(0, 250)}...`
          : description}
        {description.length > 500 && (
          <span className={styles.readMore} onClick={toggleReadMore}>
            {isExpanded ? "Show Less" : "Read More"}
          </span>
        )}
      </p>

      {icons && (
        <div className={styles.icons}>
          {icons.map((icon, index) => {
            return (
              <span key={index} className={styles.icon}>
                {icon}
              </span>
            );
          })}
        </div>
      )}

      {onRegister && (
        <Button clickFn={(e:React.MouseEvent<HTMLButtonElement>) => onRegister(e)}>
          Register
        </Button>
      )}
    </div>
  );
}

export default Card;
