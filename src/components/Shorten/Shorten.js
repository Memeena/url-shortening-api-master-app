import React from "react";
import { nanoid } from "nanoid";
import ShortLink from "./ShortLink/ShortLink";
import styles from "./Shorten.module.css";

export default function Shorten() {
  const [url, setUrl] = React.useState("");
  const [validUrl, setValidUrl] = React.useState(false);
  const [shortLink, setShortLink] = React.useState([]);

  const dynamicStyle = {
    border: !url || !validUrl ? "2px solid red" : "none",
  };
  //Checking for Valid URL
  React.useEffect(() => {
    const regex = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    setValidUrl(regex.test(url));
  }, [url]);

  function handleCopyToClipboard(event, id, link) {
    event.stopPropagation(); //Stops the propagation of the current event

    setShortLink((old) => {
      const newArr = [];
      for (let i = 0; i < old.length; i++) {
        if (old[i].id === id) {
          navigator.clipboard.writeText(link);
          newArr.push({ ...old[i], isCopy: true });
        } else {
          newArr.push(old[i]);
        }
      }

      return newArr;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      // console.log(data);
      if (!data.ok) {
        const errorLink = {
          id: nanoid(),
          link: "",
          resultLink: "",
          isCopy: false,
          isError: true,
          errMsg: data.error,
        };
        setShortLink((prev) => [errorLink, ...prev]);

        // console.log(shortLink);
      } else {
        const newLink = {
          id: nanoid(),
          link: data.result.original_link,
          resultLink: data.result.short_link,
          isCopy: false,
          isError: false,
          errMsg: "",
        };
        setShortLink((prev) => [newLink, ...prev]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(error.isError, error.msg);
  const shortLinkElements = shortLink.map((link) => (
    <ShortLink
      link={link.link}
      resultLink={link.resultLink}
      key={link.id}
      id={link.id}
      isCopy={link.isCopy}
      handleCopy={handleCopyToClipboard}
      isError={link.isError}
      errMsg={link.errMsg}
    />
  ));

  return (
    <div className={styles.shorten}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          {url && !validUrl && (
            <p className={styles.invalid}>Invalid URL.Please try again</p>
          )}
          {!url && <p className={styles.invalid}>Please enter a link!</p>}
          <input
            className={styles.input}
            type="text"
            placeholder="Shorten a link here..."
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            style={dynamicStyle}
          ></input>
        </label>
        <button className={styles.button}>Shorten It!</button>
      </form>
      <div className={styles.displayResult}>{shortLinkElements}</div>
    </div>
  );
}
