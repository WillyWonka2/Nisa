import styles from "../../styles/header.module.css";
import { LogoIcon } from "@/../public/svg/icons";
import Navigation from "./Navigation";

import Burger from "./Burger";
import LoginBlock from "./LoginBlock";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__wrapper} container`}>
        <div className={styles.logo__block}>
          <LogoIcon />
          <h2>Nisa</h2>
        </div>
        <div className={styles.nav__block}>
          <Navigation />
        </div>
        <div className={styles.buttons__block}>
          <LoginBlock />
        </div>

        <Burger />
      </div>
    </header>
  );
};

export default Header;
