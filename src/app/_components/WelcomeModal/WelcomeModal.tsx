"use client";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import styles from "./WelcomeModal.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1]; // Extract current locale from the path
    const t = useTranslations("welcomeModal");

    const closeModal = () => {
        setIsOpen(false);
    };

    // show the modal only once per session
    useEffect(() => {
        const hasShownModal = sessionStorage.getItem("hasShownModal");
        if (!hasShownModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={closeModal} title={t("title")}>
            <p className={styles.description}>{t("description")}</p>
            <div className={styles.qrCodeContainer}>
                <img src={`/qr-code-${currentLocale}.png`} alt="QR Code" />
            </div>
            <Link href={`/files/Conference-Program-${currentLocale === "ar" ? "Arabic" : "English"}-2025.pdf`} download className={styles.downloadLink}>
                {t("downloadLink")}
            </Link>
        </Modal>
    );
}