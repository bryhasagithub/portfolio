# My personal portfolio
Just change `src/portfolio.js` to get your personal portfolio. Feel free to use it as-is or customize it as much as you want. It's made to be very modular and be able to just take in values as props from one file, `src/portfolio.js`. Fork this repo and add more to it if you'd like!
## Sections 
✔️ Summary and About me\
✔️ Work Experience\
✔️ Skills\
✔️ Projects\
✔️ Blogs\
✔️ Contact me\
✔️ Github Profile

To view a live example, **[click here](https://bryhasagithub.github.io/portfolio/)**
## How To Use 🔧

From your command line, clone and run portfolio:

```bash
# Clone this repository
$ git clone https://github.com/bryhasagithub/portfolio.git

# Go into the repository
$ cd portfolio

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

```javascript
/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Bry",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀"),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/bryhasagithub",
  linkedin: "https://www.linkedin.com/in/Bryhasalinked/",
  gmail: "brynguyen1331@gmail.com",
};


const skillsSection = { .... }

const workExperience = { .... } 

const openSource = { .... } 

const bigProjects = { .... }

const creationSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

## Deployment 📦 
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Configuring GitHub Actions
- Using the Personal Access Token you placed in the `.env` file earlier create a [repository secret](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) called `OPEN_SOURCE_TOKEN` where the value matches the token value from the `.env` file in your local workspace.
- When you are done with the configuration, we highly recommend to read through the [Github Actions Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) docs.

#### Deploying to Github Pages

This section guides you to deploy your portfolio on Github pages.

- Navigate to `package.json` and enter your domain name instead of `https://example-portfolio.js.org/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/portfolio`, add the same to the homepage section of `package.json`. 

- In short you can also add `/portfolio` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly. 

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)
