import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./MemberCard.module.css";
import Image from "next/image";

function MemberCard() {
  return (
    <div className={styles.memberCard}>
      <Image
          className={styles.memberImage}
          src="/event1.jpg"
          alt="Member"
          width="400"
          height="300"
          quality={100}
        />
        <h2 className={styles.memberTitle}>Member Name</h2>
        <p className={styles.memberRole}>Member Role</p>
        <p className={styles.memberDescription}>
          This is a brief description of the member. It can include their role,
          interests, or any other relevant information.
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
