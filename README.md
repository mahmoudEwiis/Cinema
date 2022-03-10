# Cinema
A movie app with great User interface and exciting features made using Angular ⚡

## Description

It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which is fetched from Youtube. <br/>

Users cannot access movie details before logging in.<br/>

## Users have 3 ways to log in
* Users can logging in using their email address and password.  
* Users can logging in using their Google Account.  
* Users can logging in using their Github Account.  

Deployed it using Firebase [here](https://movie-3f754.web.app/).

Please leave a ⭐ as motivation if you liked the implementation 😄
<br/>
<br/>


## Built with
* [Angular](https://angular.io/).
* [Typescript](https://www.typescriptlang.org/)
* [Ngneat/Hot-toast](https://ngneat.github.io/hot-toast/).
* [Bootstrap](https://getbootstrap.com/).
* [Fontawesome](https://fontawesome.com/).

## Setup/Installation Requirements

* _$ git clone https://github.com/mahmoudEwiis/Cinema.git;_
* _Create an account at https://firebase.google.com/_
* _On Firebase, create a project_
* _open environment.ts file and environment.prod.ts_
* _Add this code to the two files. Your personal keys can be found in your project's settings_
```
    const firebaseConfig = {
    apiKey: XXXXXXXXXXXXXXXXXXXXXXXX,
    authDomain: "XXXXXXXX.firebaseapp.com",
    projectId: "XXXXXXXX",
    storageBucket: "XXXXXXXX.appspot.com",
    messagingSenderId: "XXXX",
    appId: "XXXXXXXX",
    measurementId: "G-XXXXXXXX"
    };
```


## Running the project
This is a [Angular.io](https://angular.io/) project.

In the project directory, you can run:

#### `npm install`

To install all dependencies in package.json.

#### `npm serve`

It runs the app in the development mode.<br />
Open [http://localhost:4200](http://localhost:4200) to view it in the browser. 
