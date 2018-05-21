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
