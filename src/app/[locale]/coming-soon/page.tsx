import { useTranslations } from 'next-intl';
import styles from './page.module.css'

const ComingSoon = () => {
  const t = useTranslations('comingSoon');
  return (
    <div className={styles.comingSoon}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default ComingSoon;