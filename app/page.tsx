import EventCard from "./_components/event/EventCard";
import styles from "./page.module.css";
import Card from "./_components/Card/Card";
import LandingSection from "./_components/Page/LandingSection";
import AboutSection from "./_components/Page/AboutSection";
import CarouselSection from "./_components/Page/CarouselSection";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <LandingSection />
      <AboutSection />
      <CarouselSection
        header="Our Members"
        items={[
          <Card
            imageUrl="/landing.png"
            title="Emergency Medicine Workshop"
            description="Join us for a comprehensive workshop on the latest advancements in emergency medicine. This event is designed for healthcare professionals looking to enhance their skills and knowledge."
            key={1}
            facebookUsername="#"
            instagramUsername="#"
            twitterUsername="#"
            linkedinUsername="#"
          />,
          <Card
            imageUrl="/landing.png"
            title="Advanced Trauma Life Support (ATLS) Course"
            location="Aleppo, Syria"
            description="This course provides healthcare professionals with the knowledge and skills necessary to manage trauma patients effectively. Participants will learn about the latest protocols and techniques in trauma care."
            key={2}
            facebookUsername="#"
            instagramUsername="#"
            twitterUsername="#"
            linkedinUsername="#"
          />,
          <Card
            imageUrl="/landing.png"
            title="doctor name"
            description="doctor in emergency medicine lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
            key={3}
            facebookUsername="#"
            instagramUsername="#"
            twitterUsername="#"
            linkedinUsername="#"
          />,
          <Card
            imageUrl="/landing.png"
            title="doctor name"
            description="doctor in emergency medicine lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
            key={3}
          />,
          <Card
            imageUrl="/landing.png"
            title="doctor name"
            description="doctor in emergency medicine lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            doctor in emergency medicine lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            doctor in emergency medicine lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            doctor in emergency medicine lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            doctor in emergency medicine lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            doctor in emergency medicine lorem
            "
            key={3}
          />,
          <Card
            imageUrl="/landing.png"
            title="doctor name"
            description="doctor in emergency medicine lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
            key={3}
          />,
        ]}
      />

      <CarouselSection
        header="Upcoming Events"
        items={[
          <EventCard
            onRegister={() => {}}
            imageUrl="/landing.png"
            title="Emergency Medicine Workshop"
            date="2023-10-15"
            time="10:00 AM - 4:00 PM"
            location="Damascus, Syria"
            description="Join us for a comprehensive workshop on the latest advancements in emergency medicine. This event is designed for healthcare professionals looking to enhance their skills and knowledge."
            key={1}
          />,
          <EventCard
            onRegister={() => {}}
            imageUrl="/landing.png"
            title="Advanced Trauma Life Support (ATLS) Course"
            date="2023-11-20"
            time="9:00 AM - 5:00 PM"
            location="Aleppo, Syria"
            description="This course provides healthcare professionals with the knowledge and skills necessary to manage trauma patients effectively. Participants will learn about the latest protocols and techniques in trauma care."
            key={2}
          />,
          <EventCard
            onRegister={() => {}}
            imageUrl="/landing.png"
            title="Pediatric Emergency Medicine Symposium"
            date="2023-12-05"
            time="8:00 AM - 3:00 PM"
            location="Homs, Syria"
            description="A symposium focused on pediatric emergency medicine, covering topics such as pediatric resuscitation, trauma management, and common pediatric emergencies. Ideal for pediatricians and emergency medicine specialists."
            key={3}
          />,
          <EventCard
            onRegister={() => {}}
            imageUrl="/landing.png"
            title="Pediatric Emergency Medicine Symposium"
            date="2023-12-05"
            time="8:00 AM - 3:00 PM"
            location="Homs, Syria"
            description="A symposium focused on pediatric emergency medicine, covering topics such as pediatric resuscitation, trauma management, and common pediatric emergencies. Ideal for pediatricians and emergency medicine specialists."
            key={4}
          />,
        ]}
      />
    </div>
  );
}
