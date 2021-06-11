import {Router} from 'express';
import {getAllKeywords, saveKeyword, deleteKeyword} from '../database/database';
const keyword = Router();
const MIN_INTERVAL_MS = 60000;

keyword.get('/all', (req, res, next) => {
    getAllKeywords()
    .then( keywords => res.status(200).json(keywords) )
    .catch( err => next(err) );
});

keyword.post('/', (req, res, next) => {
    const keyword = req.body.keyword as keyword;
    if ( !isKeywordValid(keyword) ) return res.status(400).end();
    saveKeyword(keyword)
    .then( () => res.status(201).end() )
    .catch( err => next(err) );

    res.status(201).end()
});

keyword.delete('/:word', (req, res, next) => {
    const wordToDelete = req.params.word;
    deleteKeyword(wordToDelete)
    .then( () => res.status(204).end() )
    .catch( err => next(err) );
})

export default keyword;

function isKeywordValid(keyword: keyword): boolean {
    if (!keyword) return false;
    const {word, interval} = keyword;
    if ( !word?.trim() ) return false; //check if word is null or only whitespaces
    if (typeof interval !== 'number') return false; 
    if (interval < MIN_INTERVAL_MS) return false;
    return true; 
}