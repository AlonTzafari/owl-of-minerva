import express from 'express';
import cron from 'node-cron';
import {collectPastes} from './services/scraper';
import alertsManager from './services/AlertsManager';
import api from './api';
const app = express();

//api route TODO: create routes
app.use('/api', api);


alertsManager();

collectPastes().catch( () => console.log('scrape failed') );
cron.schedule('*/2 * * * *', () => {
    collectPastes().catch( () => console.log('scrape failed') );
});


export default app;