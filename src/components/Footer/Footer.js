import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo-invert.svg";
import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import FooterLink from "./FooterLink/FooterLink";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

export default function Footer() {
  const featuresLink = ["Link Shortening", "Branded Links", "Analytics"];
  const resourcesLink = ["Blog", "Developers", "Support"];
  const companyLink = ["About", "Our Team", "Careers", "Contact"];

  return (
    <section className={styles.footer}>
      <img className={styles.img} src={logo} alt="Footer Logo" />
      <div className={styles.links}>
        <FooterLink key={1} heading="Features" link={featuresLink} />
        <FooterLink key={2} heading="Resources" link={resourcesLink} />
        <FooterLink key={3} heading="Company" link={companyLink} />
      </div>
      <div className={styles.social}>
        <img className={styles.socialImg} src={fb} alt="facebook" />
        <img className={styles.socialImg} src={twitter} alt="twitter" />
        <img className={styles.socialImg} src={pinterest} alt="pinterest" />
        <img className={styles.socialImg} src={instagram} alt="instagram" />
      </div>
    </section>
  );
}
