# Node.js sequelize express CRUD
Node.js CRUD application based on the MySQL database design and Express.js framework

This Node.js CRUD code use 
- Express.js framework
- MySQL database
- sequelize ORM
```
npm install --save express mysql2 sequelize body-parser
```

## Database

The application connect to MySQL database using sequalize. The configuration of database added in 'models/index.js'.

```
var sequelize = new Sequelize('example', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});
```

Initialize the configuration and connect to database on 'app.js'.
```
var models = require("./models");

models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});
```

This app use database named 'example' and 'books' table which has 4 columns. 
```
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
```

## Route
Create 'routes' folder on the root path and put route file there. After that initialiaze and register route file path on 'app.js' file.

```
var books = require('./routes/books');

app.use('/books', books);
```