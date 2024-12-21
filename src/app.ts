import express from 'express';
//or // import express = require('express);

import BodyParser from 'body-parser';

import todosRoutes from './routes/todos';
const app = express();

app.use(BodyParser.json());
app.use(todosRoutes);

app.listen(3000);