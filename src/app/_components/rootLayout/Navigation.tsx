"use client";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuBurger from "./MenuBurger";
import { usePathname, useRouter } from "next/navigation";
import { IoLanguageOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navigation');

  function handleMenuToggle() {
    setIsActive(!isActive);
  }

  function switchLanguage() {
    const currentLocale = pathname.split('/')[1]; // Extract current locale from the path
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  }
  const currentLocale = pathname.split('/')[1]; // Extract current locale from the path

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={20}
          quality={100}
        />
      </div>
      <span>
      {t("title")}
      </span>

      <ul className={`${isActive ? styles.active : ""}`}>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li>
          <Link href="/events">{t("events")}</Link>
        </li>
        <li>
          <Link href="/Resources">{t("resources")}</Link>
        </li>
        <li>
          <Link href="/support">{t("supportUs")}</Link>
        </li>
      </ul>
      <button onClick={switchLanguage} className={styles.langSwitch}>
      <IoLanguageOutline/>
        <span>{currentLocale === "en" ? "AR" : "EN"}</span>
      </button>

      <MenuBurger isActive={isActive} onMenuToggle={handleMenuToggle} />
    </nav>
  );
}

export default Navigation;
