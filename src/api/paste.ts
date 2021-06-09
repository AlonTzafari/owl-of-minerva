import {Router} from 'express';
import {getAllPastes, getPastesBySearch} from '../database/database';
const paste = Router();

paste.get('/all', (req, res, next) => {
    getAllPastes()
    .then( pastes => res.status(200).json(pastes) )
    .catch( err => next(err) );
})

paste.get('/search', (req, res, next) => {
    const search = req.query.search;
    if (!search || typeof search !== 'string') return res.status(400).end();
    getPastesBySearch(search)
    .then( pastes => res.status(200).json(pastes) )
    .catch( err => next(err) );
})

export default paste;