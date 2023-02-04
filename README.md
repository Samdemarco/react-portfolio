# 20 React: React Portfolio

<p align="center">
  <img src="public/logo192.png">
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

📌 [Link to Deployed Application](https://samdemarco.github.io/)


## Description

This web application is a text editor that runs in the browser. It is a single-page application that meets 
the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in 
case one of the options is not supported by the browser. The application is also capable of functioning offline.

## App Snapshots

App in browser
![App in-browser](images/JATE.png)

Using devtools we can see the Service Worker is active
![Service worker online](images/JATE_serviceWorkers.png)


We can then inspect and verify that the manifest is loaded 
![Manifest](images/JATE_manifest.png)

Confirm data is continuously added to database and saved locally
![IndexDB](images/JATE_db.png)

Service Worker is still active offline ensuring continuous caching
![Service worker offline](images/JATE_offline.png)

Option to install a local copy to your machine
![App Install](images/JATE_Install.png)






## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

```

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Tech-Stack](#Tech-Stack)
- [License](#license)
- [Tests](#tests)

## Installation

To run your own version of the app do the following:
1. Clone this git repo to your computer
2. In your terminal type `npm install` 
3. Once all dependencies are installed type `npm run start` which will create the `dist` folder and launch the server 
4. Use the text editor either online or offline

## Tech-Stack
- JavaScript
- [React](https://beta.reactjs.org/learn)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)


## Credits

* Samdemarco

## License

MIT License

## Tests

N/A
