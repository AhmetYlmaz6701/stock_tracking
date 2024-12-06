"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";

const SignUp = () => {
  const [users, setUsers] = useState([]);
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Register</h1>

        <div>
          <label>firstName:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstname(e.target.value)}
            required
            placeholder={users[0]?.username || "Enter your username"}
          />
        </div>
        <div>
          <label>lastName:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
            placeholder={users[0]?.username || "Enter your username"}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={users[0]?.email || "Enter your email"}
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
            console.log(firstName, lastName, email, password);
          }}
        >
          SignUp
        </button>
      </main>
    </div>
  );
};
export default SignUp;
