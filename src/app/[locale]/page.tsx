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
        src="https://8fb664b9.sibforms.com/serve/MUIFADB0777VRtqokhpdRJQJfcvYE0KFeH3387j512iqHsWWOm_6aVQ9e2nT5ERxEnq58wv2rOYOMAbVJdxX5G3PrSjwO4GrsOBPJtws_xFJbzLYv6Li8FPw6tq6loK0dvwRiLBh4S08EHo8AHjZ2CSTw7Lm6kDtN6nZRs73hSTa1onB0iR5X2FHqrQUVbUVXJB4ynNCWPRJooF4"
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
