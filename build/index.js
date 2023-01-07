"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// npm install express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet
// npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D 

var app = (0, _express["default"])();
app.listen(4000);
console.log("Server listen on port ", 4000);