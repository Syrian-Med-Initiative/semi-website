import { useTranslations } from 'next-intl';
import Button from '../Button/Button'
import styles from './AboutSection.module.css'
function AboutSection() {
    const t = useTranslations('homePage.aboutSection');
    return (
        <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h2 className="special-heading">
            {t('title')}
            </h2>
            <p className={styles.sectionDescription}>
            {t('description')}
            </p>
            <Button href="/about">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </section>
    )
}

export default AboutSection
