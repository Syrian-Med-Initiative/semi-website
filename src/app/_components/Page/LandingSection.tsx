import { useTranslations } from 'next-intl';
import Button from '../Button/Button'
import styles from './LandingSection.module.css'
function LandingSection() {
    const t = useTranslations('homePage.landingSection');
    return (
        <section className={styles.landingSection}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              {t('title')}
            </h1>
            <p className={styles.description}>
              {t('description')}
            </p>
            <div className={styles.cta}>
              <Button href="/support">
                {t('SupportUs')}
              </Button>
              <Button href="/events">
                {t('upcomingEvents')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default LandingSection
