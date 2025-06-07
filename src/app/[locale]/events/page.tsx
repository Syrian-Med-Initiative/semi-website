import { useTranslations } from "next-intl";
import Calendar from "../../_lib/Calendar";
import styles from './page.module.css'

function Page() {
  const t = useTranslations("eventPage");
  return (
    <div className={styles.eventsPage}>
      <h2 className="special-heading">{t("eventsCalendar")}</h2>
        <div className="container">
        <Calendar/>
        </div>
    </div>
  );
}

export default Page;