import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./MemberCard.module.css";
import Image from "next/image";

function MemberCard() {
  return (
    <div className={styles.memberCard}>
      <Image
        className={styles.memberImage}
        src="/avatar.gif"
        alt="Member"
        width="400"
        height="300"
        quality={100}
      />
      <h2 className={styles.memberTitle}>Dr. Hashem Dadoush</h2>
      {/* <p className={styles.memberRole}>Member Role</p> */}
      <p className={styles.memberDescription}>
        Dr. Dadoush graduated from Damascus Medical School in 1989. After
        working as a research fellow at Harvard Medical School, he completed a
        Masters in Public Health at Boston University, and then started his
        postgraduate medical training in 1992 at Yale University. In 1999, after
        getting his board certification in Internal Medicine and Emergency
        Medicine, Dr. Dadoush returned to Damascus, his hometown, where he was
        practicing Emergency Medicine. In 2011, Dr. Dadoush and his family
        returned to Texas. He was chosen as the medical director at the ED in
        Knapp Medical Center in Weslaco, TX until 2014, when Dr. Dadoush moved
        to Austin. It was in Austin that he started to get a special interest in
        substance use, and started to practice addiction medicine in 2016, then
        got his board in Addiction Medicine in 2021. In his spare time, he
        enjoys the outdoors activities in Austin with his wife, and traveling.
      </p>
      <div className={styles.memberCardSocials}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={22} color="#6b7280" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={22} color="#6b7280" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} color="#6b7280" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} color="#6b7280" />
        </a>
      </div>
    </div>
  );
}

export default MemberCard;
