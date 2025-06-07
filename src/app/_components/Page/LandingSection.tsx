import { useTranslations } from 'next-intl';
import Button from '../Button/Button'
import styles from './LandingSection.module.css'
import Link from 'next/link';
function LandingSection() {
    const t = useTranslations('homePage.landingSection');
    return (
        <section className={styles.landingSection}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              {t('title')}
            </h1>
            <div className={styles.cta}>
              <Button >
                <Link href="#NEWS_LETTER" className={styles.newsletterLink}>
                  {t('newslette')}
                </Link>
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
