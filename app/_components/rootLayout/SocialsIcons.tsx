import styles from './SocialsIcons.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialsIcons() {
    return (
        <div className={styles.socials}>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={22} color="black"/>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={22}  color="black" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22}  color="black" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22}  color="black" />
        </a>
    </div>
    )
}

export default SocialsIcons
