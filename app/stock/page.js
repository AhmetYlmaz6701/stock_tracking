import React from "react";
import styles from "../page.module.css";
import { Metadata } from "next";

export const metadata = {
  title: "Stock",
};

export default function page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque
        optio, similique modi nisi tempore animi quas suscipit, repellat sunt
        rerum eaque commodi minima velit alias sequi ipsam, recusandae magnam.
        Qui aperiam exercitationem at, perferendis ex vel aut unde quam ea quae,
        quis harum placeat, tenetur explicabo reiciendis vitae maiores!
      </main>
    </div>
  );
}
