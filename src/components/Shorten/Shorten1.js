import React from "react";
import { nanoid } from "nanoid";
import ShortLink from "./ShortLink/ShortLink";
import styles from "./Shorten.module.css";

export default function Shorten() {
  const [url, setUrl] = React.useState("");
  const [validUrl, setValidUrl] = React.useState(false);
  const [shortLink, setShortLink] = React.useState([]);
  const [currentLinkId, setCurrentLinkId] = React.useState(
    (shortLink[0] && shortLink[0].id) || ""
  );
  const [displayLink, setDisplayLink] = React.useState(false);
  // const [copySuccess, setCopySuccess] = React.useState(false);
  const [error, setError] = React.useState({ isError: false, msg: "" });

  function reset() {
    // console.log("reset function...");
    setValidUrl(false);
    // setShortLink("");
    setDisplayLink(false);
    // setCopySuccess(false);
    setError({ isError: false, msg: "" });
  }

  React.useEffect(() => {
    fetchfromAPI(url);
  }, []);

  // console.log(url);
  React.useEffect(() => {
    // console.log("inside effect");
    reset();
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
    // console.log(url, validUrl);
  }, [url]);

  function handleChange(event) {
    setUrl(event.target.value);
  }

  function fetchfromAPI(url) {
    console.log("Fetching from APi", url);
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log("before determining error/link");
        if (!res.ok) {
          setError((prev) => {
            return {
              ...prev,
              isError: true,
              msg: res.error,
            };
          });
        } else {
          console.log(res.result.short_link);
          createNewLink(res.result.short_link);
        }
      });

    console.log("end of fetching...");
  }

  function createNewLink(shortLink) {
    console.log("create new Link...");
    const newLink = {
      id: nanoid(),
      link: { shortLink },
      isCopy: false,
    };
    setShortLink((prev) => [newLink, ...prev]);
    setCurrentLinkId(newLink.id);
    console.log(shortLink);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validUrl) {
      console.log("fetching....", url);

      // fetchfromAPI(url);

      // setShortLink((prev) => {
      //   console.log(prev.length, newLink);
      //   return prev.length === 0 && newLink;
      // });
      console.log(shortLink);
      setDisplayLink(true);
    }
  }

  function handleCopyToClipboard(event, i, link) {
    event.stopPropagation();

    console.log("copy clicked");
    // setShortLink()
    // navigator.clipboard.writeText(shortLink);
    // setCopySuccess(true);
  }

  // console.log(shortLink, typeof shortLink);
  const shortLinkElements = shortLink.map((link) => (
    <ShortLink
      link={link.link}
      key={link.id}
      id={link.id}
      isCopy={link.isCopy}
      handleCopy={handleCopyToClipboard}
    />
    // handleCopy={handleCopyToClipboard} />
  ));

  return (
    <div className={styles.shorten}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          {url && !validUrl && (
            <p className={styles.invalid}>Invalid URL.Please try again</p>
          )}
          <input
            className={styles.input}
            type="text"
            placeholder="Shorten a link here..."
            onChange={handleChange}
          ></input>
        </label>
        <button className={styles.button}>Shorten It!</button>
      </form>

      {displayLink && { shortLinkElements }}

      {/* {error.isError ? (
        <div className={`${styles.error} ${styles.result}`}>{error.msg}</div>
      ) : (
        displayLink && shortLink.length > 0 && { shortLinkElements }
      )} */}
    </div>
  );
}
