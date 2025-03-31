import styles from './Footer.module.css';
import SocialsIcons from './SocialsIcons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>© 2023 Syrian Emergency Medicine Initiative. All rights reserved.</span>
            <SocialsIcons/>
            <ul>
                <li>
                    <a href="#" rel="noopener noreferrer">
                        Terms of Service
                    </a>
                </li>
                <li>
                    <a href="#" rel="noopener noreferrer">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" rel="noopener noreferrer">
                        Contact Us
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
