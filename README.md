# Babyphone - ReactJS Workshop

![GitHub repo size](https://img.shields.io/github/repo-size/retry2z/Babyphone-Workshop) ![GitHub stars](https://img.shields.io/github/stars/retry2z/Babyphone-Workshop?style=social)   ![GitHub forks](https://img.shields.io/github/forks/retry2z/Babyphone-Workshop?style=social)

## Description

The application is about people who wants to follow is their baby is making some noises and take care. Only register users can create a room and start monitoring. Everyone can join the room and receive a notification if there are some noises.

## Technologies
- ReactJS.
- Custom Flexible form-control with field validation or group validation.
- Speech detection and custom EventEmitter.
- Custom Flexible authentication guard for privet/public routes.
- Real-time notification update with Firebase firestrore.

## Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed the latest version of NPM - https://www.npmjs.com/get-npm
You have a Windows, Linux or Mac machine. State which OS is supported/which is not.
You have read https://docs.npmjs.com/.

Some basic knowledge about ReactJS, React-router-dom, Firebase, Styled-components.

## Installing and configuration before running
Download or pull this repository and type ``npm install`` in terminal. 
In the project directory, you can run: 

`npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## Application routes
ROUTE | LINK | DESCRIPTION
------|-------------|---------
| |    
/ | Home page | Fetching all available public rooms list and search by name or key words.
/auth/login | Login page | Users can authenticate to use all features of application.
/auth/register | Register page | Guests can make free registration. 
/product/create | Create new room | Authenticated users can create a room.  
/product/details/:id | Details about a room | Guests can join the room and receive notification and leave to stop receiving. Authenticated owner can modify room information and start/stop the speech detection. 
/user/profile | Profile page | Authenticated user can modify their account information, see his rooms  and change its password.
/user/logout | Logout route | Destroying current authorization token and cookie. Note - the token can't be reused if is been destroyed.

## Examples
https://workshop-project-58361.web.app/

## Contributing to Babyphone
To contribute to Babyphone-Workshop, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Go to https://github.com/retry2z/Babyphone-Workshop and click "Create a pull request" button
5. Add title and description
6. Wait for review approval and merge

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Features to be implemented
- Rooms option to be public/privet.
- Asd for password to enter.
- Share privet link to join.

## Contributors

## Contact
If you want to contact me you can reach me at h.hristow.88@gmail.com

