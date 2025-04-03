"use client"
import  { useState } from 'react'
import styles from './Navigation.module.css'
import Link from "next/link";
import Image from "next/image";
import MenuBurger from './MenuBurger';

function Navigation() {
    const [isActive, setIsActive] = useState(false);

    function handleMenuToggle(){
        setIsActive(!isActive);
    };
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
            <span>Syrian Emergency Medicine Initiative</span>
         
            <ul className={`${isActive ? styles.active :""}`}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/Resources">Resources</Link>
              </li>
              <li>
                <Link href="/support">Support Us</Link>
              </li>
            </ul>
            <MenuBurger isActive={isActive} onMenuToggle={handleMenuToggle}/>
          </nav>
    )
}

export default Navigation
