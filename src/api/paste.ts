import {Router} from 'express';
import {getAllPastes} from '../database/database';
const paste = Router();

paste.get('/all', (req, res, next) => {
    getAllPastes()
    .then( pastes => res.status(200).json(pastes) )
    .catch( err => next(err) );
})

export default paste;