# Frontend Personal Project
## Overview

The frontend personal project is your opportunity to demonstrate the skills that you have picked up from your time 
on the course (so far)! It only needs to be frontend-focused (HTML, CSS, JS, React) but can optionally incorporate 
external APIs and local data stores (e.g. `json-server`, but bear in mind that this doesn't always work well in a 
deployed environment). 
> You only have 4-5 days for this project. Focus on the building the frontend only. You should NOT be building any 
> servers, databases, or other backend-related features since we haven't covered that yet and it will take too long. 
>
> There will be a Fullstack Personal Project at the end of the Backend Course, so you will have the opportunity to build
> a fullstack app then.

The type of site / app that you build is totally up to you. Some examples from previous years are:
- e-commerce store / online shop
- exercise / gym tracker
- habit tracker
- golf score tracker
- D&D character sheet
- game (e.g. rock, paper, scissors; blackjack; dice roller; etc)
- keyboard activated soundboard

Use existing sites / apps for ideas about what functions/features to include. You only have 4-5 days to work on this, 
so keep your goals realistic! 

## Tech Stack

- You will need to use the core tech stack that we have covered on the course: 
  - HTML, CSS, JS
  - React is optional but recommended
  - Do not use another programming language, like Python, TypeScript, etc. Now is not the time to learn a new language!
- You can use third-party libraries / NPM packages -- just make sure you do some research first to determine if what 
  you have found is reliable, easy for you to use, and fit-for-purpose.
- Yes, you can use `flexbox` instead of `grid` if you really want to.

## Instructions

1. Complete the Personal Project spreadsheet (your teacher will share this on Discord).
2. Create your project in a new repo on **YOUR OWN ACCOUNT**.
   - [How to create a new GitHub repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository#creating-a-new-repository-from-the-web-ui)
   - Make sure you set your repo visibility to **public** when you create it.
3. To make it easier for teachers and staff to access your portfolio, please also do the following:
   - [ ] Fork this repo, and clone the forked version from your GitHub account
   - [ ] Rename this `README.md` file to something else (e.g. `INSTRUCTIONS.md`)
   - [ ] Create a new file called `README.md`, and include the following content sections (complete them as and when
     you are able to):
     - About My Frontend Personal Project
       - Planning & Inspiration _(e.g. include drawings, diagrams, links to sites used to get ideas, etc.)_
       - Tech Stack _(i.e. what technology / frameworks / libraries you used)_
       - Why This Stack
       - What I Enjoyed
       - What I Found Challenging
     - Links
       - Online Hosted Project (if deployed -- deployment is optional but recommended)
       - Project GitHub Repo
   - [ ] Push your code and raise a PR, as per the usual process
   - [ ] If any information changes, update it, and push your changes (especially important for the links)

   > **NOTE: We do not want you to use the fork of this repo to host your project code! Create a new dedicated repo 
   > for it from your own account.**

## Timeline

- **Mon-Wed:** Development
- **Thu AM:** Development + practice demo (practice with your Study Group for feedback)
- **Thu PM:** Feature freeze (no new functionality) -- tweak existing features; fix bugs; tidy-up code 
- **Fri AM:** Retro + end of frontend course survey
- **Fri PM:** Demos

## Demo Outline

- Your demo should only last 5 mins maximum
- You can run the demo from a locally running version of your app (i.e. on `localhost`) or from the deployed site
  _(deployment is optional)_
- You will need to show how your site / app works from the perspective of a user
- Make sure you have mock data setup for the demo
- We highly recommend you do NOT make any changes on the day of the demo, because last minute bugs/breakages are 
  very stressful to fix!

## Deployment

There are various approaches, and it depends on what sort of site/application you have built. The best options are:
- GitHub pages for a static website (no React)
- Netlify for a React app

### Static Website
The simplest solution is to host it on [GitHub Pages](https://pages.github.com/). This is nice and simple, and will allow you 
to link your GitHub repos to GitHub pages, which will then host the site/project for you.

### React Single Page App (SPA)
If you have a React app with no routing, then there are two options: You can either:
  1. Use GitHub Pages as above, but you will also need to include the `gh-pages` package. Follow the instructions
     provided [here](https://blog.logrocket.com/deploying-react-apps-github-pages/) but bear in mind the following:
     - Where they use `create-react-app` (CRA), you should use `vite` (CRA is an obsolete React project initialiser)
     - You should check out additional setup instructions for `vite`
       [here](https://vitejs.dev/guide/static-deploy.html#github-pages)
  2. Use Netlify, as per the instructions below for "React with Routing".

### React with Routing
If you have routing, then this is the best approach. It is also a good option if you have a React SPA with no routing. 
It requires a bit of setup so follow the guides carefully!
  - [Netlify web instructions](https://docs.netlify.com/site-deploys/create-deploys/)
    - These are the official Netlify instructions on how to use their web interface to link your GitHub repo to their platform
      so that you can create a "Continuous Deployment" - meaning the deployed website will automatically update to match what
      is contained in your repo!
  - [Netlify CLI instructions](https://docs.netlify.com/integrations/frameworks/vite/#deploy-your-vite-project-with-netlify-cli)
    - These are the official Netlify instructions for deploying a React app built using `vite`.
    - It involves installing their Command Line Interface (CLI), which is a programme that you run from your 
      terminal / GitBash.
    - This is an alternative approach to using the web deployment approach above. Use one approach or the other - NOT BOTH!

  > If you use Netlify for a React app and the deployed site does not work, then be sure to check the steps for adding a `_redirects`
  > file to enable both React SPA and React with Routing apps to work properly. This used to always be needed but may be addressed now.
