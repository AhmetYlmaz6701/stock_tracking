"use client";
import styles from "@/app/navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <p className={styles.navlogo}>Stock Tracking</p>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Home
                </p>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/stock">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Stock
                </p>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/users">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Users
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href="/signin">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Sign in
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href="/signup">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Sign Up
                </p>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
    </>
  );
}
