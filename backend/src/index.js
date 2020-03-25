const express = require('express');
const cors = require('cors'); //5.2K (gzipped: 2.1K)
const routes = require('./routes');

const app = express();

app.use(cors());
/** Informa ao app que estamos utilizando json para o corpo das requisicoes (converte o json em objeto javascript) */
app.use(express.json());
app.use(routes);

app.listen(3333);