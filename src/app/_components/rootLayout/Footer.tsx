import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';
import SocialsIcons from './SocialsIcons';

function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className={styles.footer}>
            <span>
                {t('allRightsReserved')}
                </span>
            <SocialsIcons/>
            <ul>
                <li>
                    <a href="#" rel="noopener noreferrer">
                        {t('terms')}
                    </a>
                </li>
                <li>
                    <a href="#" rel="noopener noreferrer">
                        {t('privacy')}
                    </a>
                </li>
                <li>
                    <a href="#" rel="noopener noreferrer">
                        {t('contact')}
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
