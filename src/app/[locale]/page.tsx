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
      <h2 className="special-heading">{t("newsletter")}</h2>
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

const membersData = [
  {
    title: "Hashem Dadoush",
    description:
      "Dr. Dadoush graduated from Damascus Medical School in 1989. After working as a research fellow at Harvard Medical School, he completed a Masters in Public Health at Boston University, and then started his postgraduate medical training in 1992 at Yale University. In 1999, after getting his board certification in Internal Medicine and Emergency Medicine, Dr. Dadoush returned to Damascus, his hometown, where he was practicing Emergency Medicine. In 2011, Dr. Dadoush and his family returned to Texas. He was chosen as the medical director at the ED in Knapp Medical Center in Weslaco, TX until 2014, when Dr. Dadoush moved to Austin. It was in Austin that he started to get a special interest in substance use, and started to practice addiction medicine in 2016, then got his board in Addiction Medicine in 2021.",
    imageUrl: "/members/Hashem-Dadoush.png",
    facebookUsername: "#",
    instagramUsername: "#",
    twitterUsername: "#",
    linkedinUsername: "#",
  },
  {
    title: "Omar Albaroudi",
    description:
      "Dr. Omar Albaroudi is an Emergency Physician at Hamad Medical Corporation in Qatar. He graduated from Damascus University, Syria in 2013, and later moved to Qatar, where he trained in one of the largest and busiest emergency departments in the world. He completed his emergency medicine residency in 2019 and has since served as a faculty member in the residency training program. During the COVID-19 pandemic, he was selected as a member of the “Rapid Sequence Intubation” team, managing critically ill patients. In 2022, he completed an advanced leadership fellowship in emergency medicine.",
    imageUrl: "/members/Omar-albaroudi.jpg",
    facebookUsername: "#",
    instagramUsername: "#",
    twitterUsername: "#",
    linkedinUsername: "#",
  },
  {
    title: "Fahd Faleh",
    description:
      "Dr. Fahd Faleh is a Senior Specialist in Emergency Medicine at Hamad Medical Corporation (HMC) in Doha, Qatar. He graduated from Tanta University Medical College, Egypt in 2014 and began his postgraduate training through HMC’s internship program in 2015. In 2016, he joined HMC’s ACGME-International and Joint Commission International (JCI) accredited Emergency Medicine Residency Training Program. He obtained the Arab Board of Health Specialization in Emergency Medicine in 2021 and subsequently completed the Advanced Emergency Physician Leadership Fellowship at HMC in 2023.",
    imageUrl: "/members/Fahd-Faleh.jpg",
    facebookUsername: "#",
    instagramUsername: "#",
    twitterUsername: "#",
    linkedinUsername: "#",
  },
  {
    title: "Bilal Albaroudi",
    description:
      "Dr. Bilal Albaroudi is an Emergency Medicine Associate Consultant at Hamad Medical Corporation (HMC) in Qatar, where he also serves as core faculty for the Emergency Medicine POCUS Fellowship program. Originally from Syria, Dr. Albaroudi earned his MD from Damascus University and completed his Emergency Medicine residency training at HMC in 2021.",
    imageUrl: "/members/Bilal-Albaroudi.jpg",
    facebookUsername: "#",
    instagramUsername: "#",
    twitterUsername: "#",
    linkedinUsername: "#",
  },
  {
    title: "Hasan Younes",
    description:
      "Dr. Hasan Younes is a distinguished Emergency Medicine physician with nearly two decades of experience shaping acute care delivery in high-stakes environments across the Middle East. A graduate of Odessa State Medical University Ukraine,( 2005), he completed rigorous residency training in Emergency Medicine at Damascus Hospital (2006–2010), mastering trauma, resuscitation, and system-based practice.",
    imageUrl: "/members/Hasan-Younes.png",
    facebookUsername: "#",
    instagramUsername: "#",
    twitterUsername: "#",
    linkedinUsername: "#",
  },
  {
    title: "Mahmoud K Haddad",
    description:
      "Dr. Mahmoud K Haddad is an Emergency Medicine registrar at Barts Health in East London and a Member of the Royal College of Emergency Medicine (MRCEM). He graduated in 2017 from Jordan University of Science and Technology (JUST) and completed his specialty training in Emergency Medicine in Qatar, where he obtained the Arab Board certification. He was awarded a Distinction in Research by the Arab Board of Health Specializations in 2023, in recognition of his contributions during specialty training.",
    imageUrl: "/members/Mahmoud-Haddad.png",
    facebookUsername: "#",
    instagramUsername: "#",
    twitterUsername: "#",
    linkedinUsername: "#",
  },
];
