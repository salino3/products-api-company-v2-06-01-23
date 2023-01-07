// npm install express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet
// npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D 
import app from './app';
import './database.js';

app.listen(4000);
console.log("Server listen on port ", 4000);





