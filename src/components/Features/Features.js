import React from "react";
import Card from "./Card/Card";
import "../../App.css";
import styles from "./Features.module.css";
import Shorten from "../Shorten/Shorten";

export default function Features() {
  const cardData = [
    {
      img: "icon-brand-recognition.svg",
      heading: "Brand Recognition",
      description: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
    },
    {
      img: "icon-detailed-records.svg",
      heading: "Detailed Records",
      description: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
    },
    {
      img: "icon-fully-customizable.svg",
      heading: "Fully Customizable",
      description: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    },
  ];

  const cardElements = cardData.map((card, i) => (
    <Card
      key={i}
      img={card.img}
      heading={card.heading}
      description={card.description}
    />
  ));

  return (
    <section className={styles.features}>
      <Shorten />
      <h2 className="small-heading">Advanced Statistics</h2>
      <p className="description">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className={styles.cards}>
        <div className={styles.line}></div>
        {cardElements}
      </div>
    </section>
  );
}
