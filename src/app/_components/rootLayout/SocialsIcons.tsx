import styles from "./SocialsIcons.module.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SocialsIcons() {
  return (
    <div className={styles.socials}>
      <span>Contact Us</span>
      <a
        href="https://www.facebook.com/profile.php?id=61579950531582"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare size={22} color="black" />
      </a>
      <a
        href="https://www.linkedin.com/company/syrian-emergency-medicine-initiative/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={22} color="black" />
      </a>
      <a href="mailto:info@semi2025.org " rel="noopener noreferrer">
        <MdEmail size={22} color="black" />
      </a>
    </div>
  );
}

export default SocialsIcons;
