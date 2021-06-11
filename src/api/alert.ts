import {Router} from 'express';
import {getAllAlerts} from '../database/database';
const alert = Router();

alert.get('/all', (req, res, next) => {
    getAllAlerts()
    .then(alerts => {
        res.status(200).json(alerts);
    }).catch(err => next(err));
});

alert.get('/unseen', (req, res, next) => {
    
});

alert.patch('/seen/:id', (req, res, next) => {
    const alertId = req.params.id;
});

export default alert;

