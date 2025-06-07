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
      <a href="mailto:aemn22384@gmail.com" rel="noopener noreferrer">
        <MdEmail size={22} color="black" />
      </a>
    </div>
  );
}

export default SocialsIcons;
