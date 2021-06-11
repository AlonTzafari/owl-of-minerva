import express from 'express';
import cron from 'node-cron';
import {collectPastes} from './services/scraper';
import alertsManager from './services/AlertsManager';
import api from './api';
const app = express();

//api route TODO: create routes
app.use('/api', api);


alertsManager();

collectPastes().catch( err => console.log(err) );
cron.schedule('*/2 * * * *', () => {
    collectPastes().catch( err => console.log(err) );
});


export default app;