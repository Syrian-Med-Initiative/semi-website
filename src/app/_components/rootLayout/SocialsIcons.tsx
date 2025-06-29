import styles from "./SocialsIcons.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SocialsIcons() {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.linkedin.com/company/syrian-emergency-medicine-initiative/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={22} color="black" />
      </a>
      <a href="mailto:admin@semi2025.onmicrosoft.com" rel="noopener noreferrer">
        <MdEmail size={22} color="black" />
      </a>
    </div>
  );
}

export default SocialsIcons;
