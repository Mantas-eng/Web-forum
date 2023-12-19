import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/router";
import styles from "../Login/styles.module.css";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login"); 

  const router = useRouter();

  const loginRequest = async () => {
   //TO DO LIST MAKE LOGIN REQUEST
  };

  const onSignUp = async () => {
    // TO DO LIST MAKE ONSIGNUP
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.text}>
          {action === "Sign Up" ? "Create An Account" : "Login"}
        </h1>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.form}>
        <div className={styles.inputs}>
          {action === "Login" ? (
            <div className={styles.input}>
              <Image src={user_icon} alt="User" />
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          ) : null}

          <div className={styles.input}>
            <Image src={email_icon} alt="Email" />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.input}>
            <Image src={password_icon} alt="Password" />
            <input
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.submitcontainer}>
          <button onClick={() => { setAction("Sign Up"); onSignUp(); }} className={styles.submit}>
            {action === "Sign Up" ? "Sign In" : "Create Account"}
          </button>
          <button onClick={() => { setAction("Login"); loginRequest(); }} className={styles.submit}>
            {action === "Sign Up" ? "Login" : "Sign In"}  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
