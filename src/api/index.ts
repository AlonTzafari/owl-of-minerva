import {Router, json} from 'express';
import cors from 'cors';
import paste from './paste';
import keyword from './keyword';
import alert from './alert';

const api = Router();

api.use( cors() );

api.use( json() );

api.use('/paste', paste);

api.use('/keyword', keyword);

api.use('/alert', alert);

export default api;