
#___project information___ <br />
![program picture](https://github.com/MartinJewski/todo_proto_alpha/tree/master/example_run.png?raw=true) <br />
The project uses NodeJs +Express on the back end side  <br />
while providing a very basic front end using ReactJS (WebbApp)+Material-Ui. <br />
SQLite is used as the database management system and since this is a simple demo,<br /> 
the database finds it's place inside todo_proto_alpha>db_example. <br />

<img src="https://github.com/MartinJewski/todo_proto_alpha/tree/master/example_run.png?raw=true" alt="Italian Trulli" style="width: 55vw; min-width: 330px;">

The frameworks mocha and chai are used for testing. <br />

## location <br />
The server side code is stored inside the server.js which is located at <br />
   todo_proto_alpha>server_side>server.js <br />
   
The front end is basically stored in <br />
todo_proto_alpha>src <br />

## how to start  <br />
###WebStorm  <br />
clone from git and set up your run configurations for the <br />
main project inside WebStorm. <br />

--------------NON WEBSTORM-------------------<br />
If you don't use WebStorm, run 'npm install' inside the todo_proto_alpha folder <br />
to install dependencies. Furthermore, if you go inside thepackage.json you will see <br />
  "scripts": { <br />
    "start": "react-scripts start", <br />
    "build": "react-scripts build", <br />
    "test": "react-scripts test", <br />
    "eject": "react-scripts eject" <br />
  }, <br />

To run your react script, be inside >todo_proto_alpha and run 'react-scripts start'
to start the script<br />
---------------------------------<br />


npm --version > 6.14.4 <br />
node --version > v12.16.2 <br />
nodemon --version > 2.0.3 (for node js) (todo_proto_alpha>npm install nodemon --save-dev) <br />
mocha  --version > 7.1.2 (todo_proto_alpha>npm i mocha chai --save-dev) <br />


My run config under Run/Debug Configuration: <br />
add new npm configuration:  <br />

name: npm start <br />
package.json: ~\WebstormProjects\todo_proto_alpha\package.json <br />
Command: run <br />
Script: start <br />
Arguments: <br />
---<br />
Node interpreter: <br />
Package manager: Project /usr/lib/node_modules/npm<br />
Environment: <br />

<br />

![settings picture](https://github.com/MartinJewski/todo_proto_alpha/tree/master/npm.png?raw=true)  <br />
<br />
<br />
<br />
<br />
<br />
###-------------WebStorm-------------------- <br />
###-------predefined information-------- <br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts  <br />

In the project directory, you can run:

### `npm start`  <br />

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
