Welcome to the read me for my react Project.

The purpose of this project is to illustrate my ability to build simple sites using react.

This particular site is a simple stock trading site. You simply type the name of a stock in, press Get Quote and the stock's price populates.
From there you select a quantity of shares and opt to buy or sell them.
Your portfolio populates on the right.

Currently the site uses a hardcoded list of stocks (AAPL INTL MSFT) to illustrate the functionality -- in the future I will update the site to use an actual trading API just to show I can work with multiple APIs.

There is some logic implented on the site such as making sure you have enough cash to buy the selected shares or enough shares to sell them back. There are some nice visual cues that make the site feel more responsive than my prior work such as the selected shares button giving a visual clue and the buy button greying out when you are considering a trade for which you do not have enough cash. 

Ideas for future implementation 

1) As noted above use an actual stock trading api to pull all stocks with real time data.
2) build the site up to store when you purchased the stocks to track gains and losses so you have something of a stock simulator
3) build out log ins so you can have multiple "players" and store their portfolio
4) some quality of life items such as being able to click on a stock in your portfolio to "get quote" rather than search again for a stock you already hold.
5) Currently the search function wont put AAPL unless you get the case correct. This is an easy fix but since I will be implementing the API soon I left it as it is currently.
6) Clean up the code -- there are currently quite a few lines of code representing things I will be adding to the site in the future. Rather than remove everything I am not using only to reimplement it in a few weeks I left more commented out code than I normally would on a portfolio project.

Credit to https://cssgradient.io/ and https://coolors.co/ for their tools which make picking colors and setting up gradients for the background so much easier! 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
