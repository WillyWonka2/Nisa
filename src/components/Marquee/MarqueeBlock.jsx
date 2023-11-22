"use client";

import styles from "@/styles/home.module.css";

import Marquee from "react-fast-marquee";

import {
  PingdomIcon,
  PendoIcon,
  SendGridIcon,
  LatticeIcon,
  GitLabIcon,
} from "../../../public/svg/icons";

const MarqueeBlock = () => {
  return (
    <div className={styles.marque__block}>
      <Marquee pauseOnHover={true} gradient={true}>
        <div className = {styles.marque__container}>
          <div>
            <PingdomIcon />
          </div>
          <div>
            <PendoIcon />
          </div>
          <div>
            <SendGridIcon />
          </div>
          <div>
            <LatticeIcon />
          </div>
          <div>
            <GitLabIcon />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBlock;
