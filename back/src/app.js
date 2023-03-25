const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/rickandmorty', router);

module.exports = app;