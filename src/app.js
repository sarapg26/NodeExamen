//IMPORTAR MODULOS
//const express = require ('express');
import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';
import {port} from './config.js';


const app =express();
app.use(express.json());
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'views')); 

app.set('view engine', 'ejs');+  
app.set('views', join(__dirname,  'views'));
app.use(indexRoutes);
app.use(express.static(join(__dirname,'public')));


app.listen(port)
console.log("holaaa!")
console.log('Escuchando por el puerto '+port+'...')