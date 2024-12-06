"use client";
import { React, useState, useEffect } from "react";
import styles from "../page.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={"Enter your email"}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            console.log(email, "\n", password);
          }}
        >
          SignIn
        </button>
      </main>
    </div>
  );
};

export default SignIn;
