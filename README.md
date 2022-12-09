# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser 1.15.2
- chance 1.0.2
- md5 2.1.0

## What to expect:

- The current version "1.0.1" of Tweeter has functioning server side code and a demo of client-side app UI.
- The app has responsive design for desktop and mobile interface.
- New tweets can be submitted and will post, along with initial sample tweets, with random user information for demo.
- The new tweets will post on the top without the need to refresh the app.
- There is no database linked so if the server is restarted any posted tweets will be deleted.
- If the browser is refreshed the tweets will not be lost.
- The app has error validation for empty tweet submission or tweets exceeding 140 characters.
- The app also has protection against Cross-Site Scripting (XSS).

## Screenshots

!["Screenshot of desktop home page"](https://github.com/raheelbennett/tweeter/blob/master/docs/Desktop-Home-Page.PNG?raw=true)
!["Screenshot of mobile home page](https://github.com/raheelbennett/tweeter/blob/master/docs/Mobile-Home-Page.PNG?raw=true)
!["Screenshot of dynamic character count"](https://github.com/raheelbennett/tweeter/blob/master/docs/Character-Counter.PNG?raw=true)
!["Screenshot of chracters exeeding"](https://github.com/raheelbennett/tweeter/blob/master/docs/Characters-Exceeded.PNG?raw=true)
!["Screenshot of error validation for max charcters"](https://github.com/raheelbennett/tweeter/blob/master/docs/Error-Validation.PNG?raw=true)
!["Screenshot of error validation for empty tweet"](https://github.com/raheelbennett/tweeter/blob/master/docs/Error-Validation-2-Mobile.PNG?raw=true)