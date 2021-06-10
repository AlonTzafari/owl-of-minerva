import {Router, json} from 'express';
import cors from 'cors';
import paste from './paste';
import keyword from './keyword';
const api = Router();

api.use( cors() );

api.use( json() );

api.use('/paste', paste);

api.use('/keyword', keyword);

export default api;