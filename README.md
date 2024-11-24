# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also uses [JSON Server](https://github.com/typicode/json-server) to mock an API for development purposes.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode and starts both the React development server and the mock JSON server concurrently. 

- React app will be available at [http://localhost:3000](http://localhost:3000).
- Mock API server will be available at [http://localhost:5000](http://localhost:5000).

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run json-server`

Starts the mock API server using JSON Server. It will watch `db.json` and serve the API at [http://localhost:5000](http://localhost:5000).


### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Clone the Repository
To get started with the project, clone this repository to your local machine:
```bash
git clone https://github.com/Ashu0705/profile.git
```
After cloning, navigate to the project directory:
```bash
cd profile
```
## Install Dependencies

Once inside the project directory, install the necessary dependencies for both the React app and the mock API server (JSON Server):
```bash
npm install
```
## Customizing the Project

To run the development environment with both the React app and the mock JSON server, use:

```bash
npm run dev
