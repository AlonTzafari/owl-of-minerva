import express from 'express';
import api from './api';
import cron from 'node-cron';
const app = express();

//TODO: serve static client

//api route TODO: create routes
app.use('/api', api);

//scraper scheduler TODO: create & import scraper module
cron.schedule('*/2 * * * *', () => {});


export default app;