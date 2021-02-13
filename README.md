Ready for the 
# PokeFight

WBS Coding School - Team-Project

> Main goals while working with git and github in a remote team:
>
> I. **[Create a NodeJS API using ExpressJS](https://github.com/widukin/PokeFightReactApp)** 
> 
> II. **[Create an React Application](https://github.com/DavidSurina/PokeFight)**
>
> Time to accomplish: 2 weeks (2h+/day) | Team-Size: 3

---

## Table of Contents

- [Project Overview](#project-overview)
- [Requirements & Installation](#requirements-and-installation)
- [Technologies & Tools](#technologies-and-tools)
- [Resources](#resources)

---

## Project Overview

### PART I: NodeJS API with ExpressJS

- Create a ExpressJS application
- Use data of JSON: https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json
- Create 3 routes
  - /pokemons - complete list of pokemons
  - /pokemon/:id - one pokemon with the id
  - /pokemon/:id/:info(name|type|base) - only the information about names, types or base of the pokemon with the id
  - Use the MVC pattern
  - Enable all the CORS
  - Host your API on Heroku

### PART II: React Application

- Create a React application
- Set the proxy with your live API address while in development
- Create 3 routes that will gather information from your API 
  - /  -> Returns all the pokemon names in a list and includes a link to the detailed view  
  - /pokemon/:id -> Detailed view with the name, type and base 
  - /pokemon/:id/:info -> Super detailed view with only the names or the types and or the bases
  - Host your React application on Netlify 	

### PART III: Pokefight

- Turn this app into a game
- Use a UI library of your choice
- Allow the user to choose the Pokemon he will fight with from the list of available Pokemons
- In the UI show which Pokemons are going to fight, and their respective infos.
- Define a game mechanism, how to win, and implement that logic into your React app.

### PART IV: Show the high scores

- Create a mongoDB database to save information about each game played
- Establish a Mongoose client to connect to your database
- Create a Game schema and model in the appropriate models folder.
- Create a route in your back-end where you will send the result of each game.
  -  /game/save
- Save this game data in your DB.
- Create a route where the front-end can retrieve all the previous games infos
  - /game/leaderboard
- Your React app should then have a /leaderboard route where the information of the previous games will be displayed.

---

## Demo
### Frontend
[PokeFightReactApp on Netlify](https://pokefigth.netlify.app)

### Backend
[PokeFight on Heroku](https://evening-falls-69897.herokuapp.com)

Test available endpoints for **POSTS**

- [All posts](https://flaky-tales-api.herokuapp.com/posts)
- [Post with postId 4](https://flaky-tales-api.herokuapp.com/posts/4)
- [All posts ordered by {rating} and sorted in {desc}ending order](https://flaky-tales-api.herokuapp.com/posts?orderby=rating&sort=desc)
- [All posts with a rating of 4](https://flaky-tales-api.herokuapp.com/posts/ratings/4)
- [All posts and the users data from user with userId 2](https://flaky-tales-api.herokuapp.com/posts/users/2)
- [All posts with topicId 2](https://flaky-tales-api.herokuapp.com/posts/topics/2)
- [Search for posts of which the title contains Cook](https://flaky-tales-api.herokuapp.com/posts/search?title=Cook)

Test available endpoints for **USERS**

- [All users](https://flaky-tales-api.herokuapp.com/users)
- [User with userId 2](https://flaky-tales-api.herokuapp.com/users/2)
- [All users orderd by {username} and sorted in {desc}ending order](https://flaky-tales-api.herokuapp.com/users?orderby=username&sort=desc)
- [Search for users of which fields contain _"tustra anz"_](https://flaky-tales-api.herokuapp.com/users/search/?who=tustra&anz)

## Requirements and Installation

This project requires [Node.js](https://nodejs.org/en/) v14.15.x to be installed on your machine.
To check your actual version, run:

```bash
$ node --version
```

### Installation

If you want to clone this project, run:

#### Frontend
```bash
$ git clone https://github.com/widukin/PokeFightReactApp.git
$ cd PokeFightReactApp
$ npm install
```

#### Backend
```bash
$ git clone https://github.com/DavidSurina/PokeFight.git
$ cd PokeFight
$ npm install
```

To run the application (databse required!): `$ node .`

### Database

sample schema (will be provided soon)

## Technologies and Tools

| Technologies / Tools          | Used               | Notes                                         |
| :---------------------------- | :----------------- | :-------------------------------------------- |
|                               |                    |                                               |
| Express                       | :white_check_mark: | Minimalist web framework for Node.js |
| Node                          | :white_check_mark: | Server Side JavaScript (asynchronous)) |
| MongoDB                       | :white_check_mark: | document oriented NoSQL database |
| mongoose                      | :white_check_mark: | mongoDB ORM Tool |
|                               |                    |                   |
| React                         | :white_check_mark: | Java Script Library |
| Material-UI                         | :white_check_mark: | Open Source Design System for React |
|                               |                    |                   |
| Git/Github                    | :white_check_mark: | Version Control |
| Postman                       | :white_check_mark: | Testing queries for fetching data |
|                               |                    |                   |
| Editor (VS Code) + Extensions | :white_check_mark: | Extension recommended: Prettier |
|                               |                    |                   |
| Trello                        | :white_check_mark: | Quick & easy Project-Management |
| Discord / Google Meet         | :white_check_mark: | Team Communication |
|                               |                    |                    |
| Heroku                        | :white_check_mark: | Publishing |
| Netlify                       | :white_check_mark: | Publishing |

---

## Resources

### Packages installed in this project

- [npm - express - minimalist web framework for node](https://www.npmjs.com/package/express)
- [npm - express-promise-router - wrapper for Express 4's Router allowing middleware to return promises](https://www.npmjs.com/package/express-promise-router)
- [npm - axios - promise based HTTP client](https://www.npmjs.com/package/axios)
- [npm - mongoose - MongoDB object modeling tool](https://www.npmjs.com/package/mongoose)
- [npm - body-parser - Parse incoming request bodies in a middleware before your handlers, available under the req.body property](https://www.npmjs.com/package/body-parser)
- [npm - module for environment variables](https://www.npmjs.com/package/dotenv)
- [npm - nodemon - automatic restart of node application](https://www.npmjs.com/package/nodemon)
- [npm - react - JavaScript library for creating user interfaces](https://www.npmjs.com/package/react)
- [npm - react-dom - working with the DOM](https://www.npmjs.com/search?q=React-dom)
- [npm - react-router-dom - DOM bindings for React Router](https://www.npmjs.com/package/react-router-dom)
- [npm - @material-ui/cor - React components for faster and simpler web development](https://www.npmjs.com/package/@material-ui/core)
- [npm - cores - enable CORS with various options](https://www.npmjs.com/package/cors)

### MongoDB and mongoose
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [MongoDB Client](https://mongoosejs.com/docs/connections.html)
- [Schema](https://mongoosejs.com/docs/guide.html#definition)
- [Model](https://mongoosejs.com/docs/models.html)

### NodeJS
- [ExpressJS](https://expressjs.com/en/starter/hello-world.html)
- [Express Middleware CORS](https://expressjs.com/en/resources/middleware/cors.html)

### React
- [React Docs](https://reactjs.org/docs/create-a-new-react-app.html)
- [Proxying API requests in development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
- [React Router](https://reacttraining.com/react-router/web/api/Route)

### CSS & MaterialUI
- [AutoPrefixer](https://autoprefixer.github.io/)
- [Material-UI](https://material-ui.com)
- [How to change the style of components dynamically?](https://github.com/mui-org/material-ui/issues/7408)

### Postman - Simplify API Development

- [Postman](https://www.postman.com/)

### Publish Application

- [Heroku](https://devcenter.heroku.com/articles/git)
- [Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)

### Poke resources

- [PokéAPI](https://pokeapi.co)
- [PokeresBastionbot](https://pokeres.bastionbot.org/images/pokemon/1.png)

