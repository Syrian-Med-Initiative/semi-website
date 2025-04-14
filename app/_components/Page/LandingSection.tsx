import Button from '../Button/Button'
import styles from './LandingSection.module.css'
function LandingSection() {
    return (
        <section className={styles.landingSection}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              Together, we elevate emergency medicine in Syria
              {/* معًا نرتقي بطب الطوارئ في سوريا */}
            </h1>
            <p className={styles.description}>
              Join us in our mission to improve healthcare access and quality.
              {/* تعلم، تدرب، وساهم في إنقاذ الأرواح من خلال منصة متخصصة لأطباء الطوارئ */}
            </p>
            <div className={styles.cta}>
              <Button href="/support">
                Support our mission
                {/* ساعدنا في مهمتنا */}
              </Button>
              <Button href="/events">
                {/* سجّل في ورشة عمل */}
                upcoming events
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default LandingSection
