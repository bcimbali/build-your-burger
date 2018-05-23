# Build Your Burger

In short, this is a simple full-stack restaurant app that lets users input the names of burgers they'd like to eat.  Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.  Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will be devoured and move to the right side of the page.  The app stores every burger in a database, whether devoured or not.

## Getting Started
- `git clone` this repository
- Run `npm install` to get all dependencies
- Start a SQL server of your choice
- Using your preferred SQL client, create a database by using the `schema.sql` file
- Once the database is created, seed it with data by running the `seeds.sql` file
- Update the `config/connection` file with your username, password and preferred port (default is 3306)
- Run `node server.js`
- Open up a web browser and go to `http://localhost:8080/` (or whichever port you specify in the `server.js` file)

## Screenshots

![Screenshot-of-Build-your-Burger-app](https://github.com/bcimbali/build-your-burger/blob/master/public/assets/img/build-your-burger-screenshot.png?raw=true)

## How to Use

It's easy!  Just type in the name of a burger you would like to add to the menu in the text field at the bottom, and click 'Submit.'  The non-devoured burgers will display on the left-hand side of the screen.

When you want to eat the burger, click on the "Devour it!" button.  The burger will then live on the right-hand side of the screen.  That's it! Enjoy!

## Check it Out Here:
https://fathomless-dusk-58001.herokuapp.com/burgers

## Built With

- HTML
- CSS
- Javascript
- jQuery
- Node.js
- MySQL
- [NPM Express package](https://www.npmjs.com/package/express)
- [NPM Handlebars package](https://www.npmjs.com/package/express-handlebars)
- [NPM Body Parser package](https://www.npmjs.com/package/body-parser)
