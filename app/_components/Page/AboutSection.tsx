import Button from '../Button/Button'
import styles from './AboutSection.module.css'
function AboutSection() {
    return (
        <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.contentContainer}>
            <h2 className="special-heading">
              About Us
              {/* من نحن */}
            </h2>
            <p className={styles.sectionDescription}>
              {/* نحن مجموعة من أطباء الطوارئ المكرسين لتحسين الرعاية الصحية في سوريا. نحن نعمل على تطوير التعليم والتدريب في مجال طب الطوارئ، وتوفير الموارد والدعم للأطباء والممارسين الصحيين في سوريا. */}
              We are a group of emergency physicians dedicated to improving
              healthcare in Syria. We work to advance education and training in
              emergency medicine, providing resources and support for doctors
              and healthcare practitioners in Syria.
            </p>
            <Button href="/about">
              {/* تعرف علينا */}
              Learn more
            </Button>
          </div>
        </div>
      </section>
    )
}

export default AboutSection
