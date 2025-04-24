import { useTranslations } from "next-intl";
import Card from "../../_components/Card/Card";
import { CardData } from "../../_types/CardType";
import Calendar from "../../_lib/Calendar";

function Page() {
  const t = useTranslations("eventPage");
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "100px",
        alignItems: "center",
      }}
    >
      <h2 className="special-heading">{t("eventsCalendar")}</h2>
        <div className="container">
        <Calendar/>
        </div>
      
      <section>
        <h2 className="special-heading">{t("pastEvents")}</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {eventsData.map((event, index) => (
            <Card cardData={event} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;

const eventsData: CardData[] = [
  {
    title: "Event 1",
    date: "2023-10-01",
    time: "10:00 AM",
    location: "Location 1",
    description:
      "Description for Event 1 goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/landing2.png",
    registerBtn: true,
  },
  {
    title: "Event 2",
    date: "2023-10-02",
    time: "11:00 AM",
    location: "Location 2",
    description:
      "Description for Event 2 goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/landing2.png",
    registerBtn: true,
  },
  {
    title: "Event 3",
    date: "2023-10-03",
    time: "12:00 PM",
    location: "Location 3",
    description:
      "Description for Event 3 goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/landing2.png",
    registerBtn: true,
  },
  {
    title: "Event 4",
    date: "2023-10-04",
    time: "1:00 PM",
    location: "Location 4",
    description:
      "Description for Event 4 goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/landing2.png",
    registerBtn: true,
  },
  {
    title: "Event 5",
    date: "2023-10-05",
    time: "2:00 PM",
    location: "Location 5",
    description:
      "Description for Event 5 goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/landing2.png",
    registerBtn: true,
  },
];
