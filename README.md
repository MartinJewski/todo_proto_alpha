
#___project information___
The project uses NodeJs +Express on the back end side  <br />
while providing a very basic front end using ReactJS (WebbApp)+Material-Ui. <br />
SQLite is used as the database management system and since this is a simple demo, 
the database finds it's place inside todo_proto_alpha>db_example. <br />

## location
The server side code is stored inside the server.js which is located at <br />
   todo_proto_alpha>server_side>server.js <br />
   
The front end is basically stored in <br />
todo_proto_alpha>src <br />

## how to start
###WebStorm
clone from git and set up your run configurations for the <br />
main project. <br />

npm --version > 6.14.4
node --version > v12.16.2
nodemon --version > 2.0.3 (for node js) (todo_proto_alpha>npm install nodemon --save-dev)

My run config under Run/Debug Configuration: <br />
add new npm configuration:  <br />

name: npm start <br />
package.json: ~\WebstormProjects\todo_proto_alpha\package.json <br />
Command: run <br />
Script: start <br />
Arguments: <br />
---
Node interpreter: 
Package manager: Project /usr/lib/node_modules/npm
Environment: 


#___predefined information___
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
