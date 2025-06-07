import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";
import SocialsIcons from "./SocialsIcons";

function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className={styles.footer}>
      <span>{t("allRightsReserved")}</span>
      <SocialsIcons />
    </footer>
  );
}

export default Footer;
