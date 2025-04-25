import styles from "./page.module.css";
import Card from "../_components/Card/Card";
import LandingSection from "../_components/Page/LandingSection";
import AboutSection from "../_components/Page/AboutSection";
import CarouselSection from "../_components/Page/CarouselSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className={styles.homePage}>
      <LandingSection />
      <AboutSection />
      <CarouselSection
        header={t("ourMembers")}
        items={[
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Emergency Medicine Workshop",
              facebookUsername: "#",
              instagramUsername: "#",
              twitterUsername: "#",
              linkedinUsername: "#",
              description:
                "Join us for a comprehensive workshop on the latest advancements in emergency medicine. This event is designed for healthcare professionals looking to enhance their skills and knowledge.",
            }}
            key={2}
          />,
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Emergency Medicine Workshop",
              facebookUsername: "#",
              instagramUsername: "#",
              twitterUsername: "#",
              linkedinUsername: "#",
              description:
                "Join us for a comprehensive workshop on the latest advancements in emergency medicine. This event is designed for healthcare professionals looking to enhance their skills and knowledge.",
            }}
            key={3}
          />,
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Emergency Medicine Workshop",
              facebookUsername: "#",
              instagramUsername: "#",
              twitterUsername: "#",
              linkedinUsername: "#",
              description:
                "Join us for a comprehensive workshop on the latest advancements in emergency medicine. This event is designed for healthcare professionals looking to enhance their skills and knowledge.",
            }}
            key={4}
          />,
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "ورشة عمل في طب الطوارئ",
              facebookUsername: "#",
              instagramUsername: "#",
              twitterUsername: "#",
              linkedinUsername: "#",
              description:
                "انضم إلينا في ورشة عمل شاملة حول أحدث التطورات في طب الطوارئ. تم تصميم هذا الحدث للمهنيين الصحيين الذين يتطلعون إلى تعزيز مهاراتهم ومعرفتهم.",
            }}
            key={5}
          />,
        ]}
      />
      <CarouselSection
        header={t("upcomingEvents")}
        items={[
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Emergency Medicine Workshop",
              date: "2023-10-15",
              time: "10:00 AM - 4:00 PM",
              location: "Damascus, Syria",
              description:
                "Join us for a comprehensive workshop on the latest advancements in emergency medicine. This event is designed for healthcare professionals looking to enhance their skills and knowledge.",
            }}
            key={1}
          />,
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Advanced Trauma Life Support (ATLS) Course",
              date: "2023-11-20",
              time: "9:00 AM - 5:00 PM",
              location: "Aleppo, Syria",
              description:
                "This course provides healthcare professionals with the knowledge and skills necessary to manage trauma patients effectively. Participants will learn about the latest protocols and techniques in trauma care.",
            }}
            key={2}
          />,
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Pediatric Emergency Medicine Symposium",
              date: "2023-12-05",
              time: "8:00 AM - 3:00 PM",
              location: "Homs, Syria",
              description:
                "A symposium focused on pediatric emergency medicine, covering topics such as pediatric resuscitation, trauma management, and common pediatric emergencies. Ideal for pediatricians and emergency medicine specialists.",
            }}
            key={3}
          />,
          <Card
            cardData={{
              imageUrl: "/landing.png",
              title: "Pediatric Emergency Medicine Symposium",
              date: "2023-12-05",
              time: "8:00 AM - 3:00 PM",
              location: "Homs, Syria",
              description:
                "A symposium focused on pediatric emergency medicine, covering topics such as pediatric resuscitation, trauma management, and common pediatric emergencies. Ideal for pediatricians and emergency medicine specialists.",
            }}
            key={4}
          />,
        ]}
      />
        <h2 className="special-heading">
        {t("newsletter")}
        </h2>
      <iframe
        width="100%"
        height="590px"
        src="https://sibforms.com/serve/MUIFAORWXRrfhBfSvMmtkAPyF6EhV-RNYhISZGw2kbWxoMKpAPomCggKnKMnYDszecIcloFeNFtOSo3nrfuh6fL405Fbf1KgsMfRMG-KRKZ2FyHI3C5UVigcW1NBXttwGOuVilUlQtUaBh0PRPQ5ACa0j67LTal7TBxBNHHch0HN7dBaBX3lbED7NFv-0J7EsdtnS-2KuASpOlaP"
        allowFullScreen
        style={{display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", backgroundColor:"white", border: "none",paddingTop: "10px"}}
      ></iframe>
    </div>
  );
}
