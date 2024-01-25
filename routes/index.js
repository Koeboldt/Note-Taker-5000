const app = require('express').Router();

const noteRoutes = require('./notes-routes');

app.use('/api', noteRoutes);


module.exports = app;