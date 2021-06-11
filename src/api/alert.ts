import {Router} from 'express';
import {getAllAlerts, getAllUnseenAlerts, seenAlert} from '../database/database';
const alert = Router();

alert.get('/all', (req, res, next) => {
    getAllAlerts()
    .then(alerts => {
        res.status(200).json(alerts);
    }).catch(err => next(err));
});

alert.get('/unseen', (req, res, next) => {
    getAllUnseenAlerts()
    .then(alerts => {
        res.status(200).json(alerts);
    }).catch(err => next(err));
});

alert.patch('/seen/:id', (req, res, next) => {
    const alertId = req.params.id;
    seenAlert(alertId)
    .then(() => {
        res.status(200).end();
    }).catch(err => next(err));
});

export default alert;

