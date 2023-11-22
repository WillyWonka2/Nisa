"use client";
import { BurgerIcon } from "../../../public/svg/icons";
import styles from "@/styles/header.module.css";
import Navigation from "./Navigation";
import { useState } from "react";
import LoginBlock from "./LoginBlock";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const modalHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.burger__block}>
      <div
        onClick={() => modalHandler()}
        className={
          !isActive
            ? `${styles.burger}`
            : `${styles.burger} ${styles.burger__open}`
        }
      >
        <span></span>
        <span></span>
      </div>
      <div
        className={styles.modal__window}
        style={isActive ? { display: "flex" } : { display: "none" }}
      >
        <Navigation />
        <div className = {styles.login__block}>
          <LoginBlock />
        </div>
      </div>
    </div>
  );
};

export default Burger;
