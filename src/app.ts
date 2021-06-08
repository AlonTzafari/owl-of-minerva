import express from 'express';
import cron from 'node-cron';
import {collectPastes} from './services/scraper'
import api from './api';
const app = express();

//api route TODO: create routes
app.use('/api', api);

//scraper scheduler TODO: create & import scraper module
cron.schedule('*/2 * * * *', () => {
    console.log('scraping...');
    // collectPastes()
    // .then( () => console.log('scrape completed') )
    // .catch( () => console.log('scrape failed') );
});


export default app;