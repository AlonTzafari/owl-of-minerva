import {Router} from 'express';
import {} from '../database/database';
const alert = Router();

alert.get('/all', (req, res, next) => {
    
});

alert.get('/unseen', (req, res, next) => {
    
});

alert.patch('/seen/:id', (req, res, next) => {
    const alertId = req.params.id;
});

export default alert;

