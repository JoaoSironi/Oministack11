const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
* Metodos HTTP
*
* GET: Buscar uma informaçao no Backend
* POST: Criar uma informaçao no Backend
* PUT: Alterar uma informaçao no Backend
* DELETE: Deletar uma informaçao no Backend
*/

/*
* Tipos de Parâmetros
*
* Query Params: Parametros nomeados usados na rota apos "?" (Filtros, paginação...)
* Route Params: Parametros utilizados para identificar recursos
* Request Body: Corpo de requisição, utilizados para criarou alterar recursos
*/


/**
 * Driver: SELECT * FROM table
 * Query Builder: table('table').select('*').where()
 */