import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { FaBook, FaNetworkWired, FaGraduationCap } from "react-icons/fa";
import Button from "../../_components/Button/Button";
import Image from "next/image";

function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <div className={styles.aboutPage}>
      <section className={styles.landingSection}>
        <div className={styles.imageContainer}>
          <Image
            width={300}
            height={200}
            src="/syria.png"
            alt="Syrian Emergency Medicine Initiative"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Syrian Emergency Medicine Initiative
          </h1>
          <p className={styles.description}>
          Uniting Syrian physicians worldwide to restore, strengthen, and lead the future of emergency medicine in Syria.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
