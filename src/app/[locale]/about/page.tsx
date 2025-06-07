import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import { FaGraduationCap, FaHandshake, FaNetworkWired } from "react-icons/fa";
import Card from "../../_components/Card/Card";
import CarouselSection from "../../_components/Page/CarouselSection";
import { membersData } from "../../_lib/memberData";

function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <section className={styles.landingSection}>
          <div className={styles.imageContainer}>
            <Image
              width={300}
              height={200}
              src="/logo-2.png"
              alt="Syrian Emergency Medicine Initiative"
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>{t("landingSection.title")}</h1>
          </div>
        </section>
        <section className={styles.missionSection}>
          <h2 className="special-heading">{t("missionSection.title")}</h2>
          <p>{t("missionSection.description")}</p>
        </section>
        <section className={styles.objectivesSection}>
          <h2 className="special-heading">{t("objectivesSection.title")}</h2>
          <ul>
            <li>
              <span>
                <FaGraduationCap size={80} color="#6A994E" />
              </span>
              <h3>
                {t("objectivesSection.educateTitle")}
              </h3>
              <p>
                {t("objectivesSection.educateDescription")}
              </p>
            </li>
            <li>
              <span>
                <FaHandshake size={80} color="#6A994E" />
              </span>
              <h3>
                {t("objectivesSection.integrationTitle")}
              </h3>
              <p>
                {t("objectivesSection.integrationDescription")}
              </p>
            </li>
            <li>
              <span>
                <FaNetworkWired size={80} color="#6A994E" />
              </span>
              <h3>
                {t("objectivesSection.networkTitle")}
              </h3>
              <p>
                {t("objectivesSection.networkDescription")}
              </p>
            </li>
          </ul>
        </section>
        <CarouselSection
        header={t("membersSection.title")}
        items={membersData.map((member, index) => (
          <Card
            cardData={{
              imageUrl: member.imageUrl,
              title: member.title,
              description: member.description,
              facebookUsername: member.facebookUsername || undefined,
              instagramUsername: member.instagramUsername || undefined,
              twitterUsername: member.twitterUsername || undefined,
              linkedinUsername: member.linkedinUsername || undefined,
            }}
            key={index}
          />
        ))}
      />
      </div>
    </div>
  );
}

export default AboutPage;
