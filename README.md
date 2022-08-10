# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - Check for valid URL and display error message if invalid

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL here](https://github.com/Memeena/url-shortening-api-master-app/tree/master)
- Live Site URL: [Live site URL here](https://memeena.github.io/url-shortening-api-master-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- CSS Modules - For styles

### What I learned

This was a thorough learning challenge for improving my kowledge in React. Learnt the following

- How React works when a state is changed ?
  It re renders the component and the associated components after every state change so that the UI is updated with newly changed state variable. When a state variable is changed, it does not get affected in the current render rather gets changed in the next render.

- How to populate the state variable with an object retaining the previous values

```js
const newLink = {
  id: nanoid(),
  link: data.result.original_link,
  resultLink: data.result.short_link,
  isCopy: false,
  isError: false,
  errMsg: "",
};
setShortLink((prev) => [newLink, ...prev]);
```

- How to fetch from an API and use the data using an async function using async-await

```js
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();

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
```

- How to pass props to child component.

```js
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
```

- How to check condition in child component and update the function in the parent component by passing the vaules back to the parent component. In this challenge, the shortlink obtained from API is checked for copy by passing the 'isCopy' variable and that particular link with its id is changed in the parent component.

```js
<button
  className={styles.copy}
  style={dynamicStyle}
  onClick={(event) => props.handleCopy(event, props.id, props.resultLink)}
>
  {props.isCopy ? "Copied!" : "Copy"}
</button>
```

- Using dynamic styles for changing the style dynamically based on a condition.

```js
const dynamicStyle = {
  border: !url || !validUrl ? "2px solid red" : "none",
};
```

- How to check for condition in the JSX and change the UI.

```js
{
  url && !validUrl && (
    <p className={styles.invalid}>Invalid URL.Please try again</p>
  );
}
{
  !url && <p className={styles.invalid}>Please enter a link!</p>;
}
```

- How to pass card details as an array to a child component.

```js
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
```

### Continued development

- The active states of the social icons in the footer are not implemented as per design. The problem is to find a proper way of using svg icons in a page. Whether to use two different icons or changing the existing icon itself using some property. Still learning and shall implement it soon.

- The transition from normal to hover states can be handled with some animations. Learning about animations in React and shall implement it soon.

### Useful resources

- [Scrimba - Learn React for Free](https://scrimba.com/learn/learnreact) - This helped me building this project. I have completed this course and have signed up for Advanced course of the same.

## Author

- Frontend Mentor - [@meMeena](https://www.frontendmentor.io/profile/meMeena)
- Twitter - [@Mekrish18](https://www.twitter.com/MeKrish18)
