const express = require('express');
const route = require ('./route');

const server = express();

server.set("view engine", "ejs");

server.use(express.static("public")); 

server.use(route);

server.listen(8080, () => console.log('Rodando!!'));