# math4you: Practicing POST Requests

This application is **almost** complete! It is your job to add in the necessary network request so the app works as expected. You will also test this network request using Cypress. Follow the steps below carefully.

### Set Up
1. Clone down this repo and `cd` into the directory
2. Run `npm i`
3. Run `npm start`
4. Clone down [the backend repo](https://github.com/kaylagordon/math4you-be) and `cd` into that directory
5. Run `npm i`
6. Run `node server.js`
7. Spend some time reading through both codebases and clicking around the app (Note: There IS a bug in the app! This is what you are in charge of fixing!)

### Writing the POST
8. Go to the `apiCalls.js` file in the FE repo
9. Complete the function by following the steps outlined (Note: When you're done, the app should work with NO bugs!)

### Testing the POST
10. Install Cypress into your FE repo
11. Write a Cypress test that intercepts the POST request and tests the user flow: *If a user gets the answer correct, the card should be replaced with a new card*
12. Write a Cypress test that intercepts the POST request and tests the user flow: *If a user gets the answer wrong, the card should NOT be replaced with a new card*
13. (optional 🌶 challenge) Write a sad path Cypress test that intercepts the POST request and stubs a response with a 500 status code. What should appear on the page if there is an error (hint: look at `MatchCard.js`)? Test that it renders as expected!

#### Stuck? Reference the `Writing tests involving network requests` section of [this lesson](https://frontend.turing.edu/lessons/module-3/intro-to-cypress-testing.html)
