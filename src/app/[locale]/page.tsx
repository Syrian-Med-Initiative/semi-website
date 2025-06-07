import styles from "./page.module.css";
import Card from "../_components/Card/Card";
import LandingSection from "../_components/Page/LandingSection";
import AboutSection from "../_components/Page/AboutSection";
import CarouselSection from "../_components/Page/CarouselSection";
import { useTranslations } from "next-intl";
import { membersData } from "../_lib/memberData";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className={styles.homePage}>
      <LandingSection />
      <AboutSection />
      <CarouselSection
        header={t("ourMembers")}
        items={membersData.map((member, index) => (
          <Card
            cardData={{
              imageUrl: member.imageUrl || "/default-member.png",
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
      <h2 className="special-heading" id="NEWS_LETTER">{t("newsletter")}</h2>
      <iframe
        width="100%"
        height="590px"
        src="https://sibforms.com/serve/MUIFAORWXRrfhBfSvMmtkAPyF6EhV-RNYhISZGw2kbWxoMKpAPomCggKnKMnYDszecIcloFeNFtOSo3nrfuh6fL405Fbf1KgsMfRMG-KRKZ2FyHI3C5UVigcW1NBXttwGOuVilUlQtUaBh0PRPQ5ACa0j67LTal7TBxBNHHch0HN7dBaBX3lbED7NFv-0J7EsdtnS-2KuASpOlaP"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          backgroundColor: "white",
          border: "none",
          paddingTop: "10px",
        }}
      ></iframe>
    </div>
  );
}
