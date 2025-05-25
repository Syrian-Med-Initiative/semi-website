"use client";
import Image from "next/image";
import styles from "./Card.module.css";
import { JSX, useState } from "react";

import Button from "../Button/Button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CardData } from "../../_types/CardType";

function Card({ cardData }: { cardData: CardData }) {
  const {
    imageUrl,
    title,
    date,
    time,
    location,
    description,
    onRegister,
    registerBtn,
    facebookUsername,
    twitterUsername,
    instagramUsername,
    linkedinUsername,
  } = cardData;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const socialPlatforms =
    [
      facebookUsername && {
        username: facebookUsername,
        icon: <FaFacebook size={22} color="#6b7280" />,
        url: (username: string) => `https://facebook.com/${username}`,
      },
      twitterUsername && {
        username: twitterUsername,
        icon: <FaTwitter size={22} color="#6b7280" />,
        url: (username: string) => `https://twitter.com/${username}`,
      },
      instagramUsername && {
        username: instagramUsername,
        icon: <FaInstagram size={22} color="#6b7280" />,
        url: (username: string) => `https://instagram.com/${username}`,
      },
      linkedinUsername && {
        username: linkedinUsername,
        icon: <FaLinkedin size={22} color="#6b7280" />,
        url: (username: string) => `https://linkedin.com/in/${username}`,
      },
    ].filter(
      (
        platform
      ): platform is {
        username: string;
        icon: JSX.Element;
        url: (username: string) => string;
      } => !!platform
    ) || [];

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
        {description.length > 250 && (
          <span className={styles.readMore} onClick={toggleReadMore}>
            {isExpanded ? "Show Less" : "Read More"}
          </span>
        )}
      </p>

      <div className={styles.icons}>
        {socialPlatforms.map(({ username, icon, url }, index) => (
          <a
            key={index}
            href={url(username)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            {icon}
          </a>
        ))}
      </div>

      {onRegister && (
        <Button
          clickFn={(e: React.MouseEvent<HTMLButtonElement>) => onRegister(e)}
        >
          Register
        </Button>
      )}

      {registerBtn && (
        <Button
          clickFn={() => () =>{alert("Register button clicked")}}
        >
          Register
        </Button>
      )}
    </div>
  );
}

export default Card;
