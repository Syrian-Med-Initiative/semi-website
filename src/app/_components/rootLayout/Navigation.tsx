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
      <div className={styles.logo} onClick={
        () =>{
          setIsActive(false);
          router.push(`/${currentLocale}/`);
        }
      } >
        <Image
          src="/logo-2.png"
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
        <li className={`${pathname === `/${currentLocale}` ? styles.active : ""}`}>
          <Link href={`/${currentLocale}/`} onClick={() => { setIsActive(false); }}>{t("home")}</Link>
        </li>
        <li className={`${pathname.includes("/about") ? styles.active : ""}`}>
          <Link href={`/${currentLocale}/about`} onClick={() => { setIsActive(false); }}>{t("about")}</Link>
        </li>
        <li className={`${pathname.includes("/events") ? styles.active : ""}`}>
          <Link href={`/${currentLocale}/events`} onClick={() => { setIsActive(false); }}>{t("events")}</Link>
        </li>
        <li className={`${pathname.includes("/Webinars") ? styles.active : ""}`}>
          <Link href={`/${currentLocale}/coming-soon`} onClick={() => { setIsActive(false); }}>{t("Webinars")}</Link>
        </li>
        <li className={`${pathname.includes("/resources") ? styles.active : ""}`}>
          <Link href={`/${currentLocale}/coming-soon`} onClick={() => { setIsActive(false); }}>{t("resources")}</Link>
        </li>
        <li className={`${pathname.includes("/support") ? styles.active : ""}`}>
          <Link href={`/${currentLocale}/coming-soon`} onClick={() => { setIsActive(false); }}>{t("supportUs")}</Link>
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
