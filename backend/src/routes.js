const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Tipos de parametros
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, Paginacao)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

routes.post('/sessions', SessionController.create);

/** Rotas Ongs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** Rotas Incidents */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/** Retorna dados especifico de uma Ong */
routes.get('/profile', profileController.index);

module.exports = routes;