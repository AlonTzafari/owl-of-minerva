import {Router} from 'express';
import paste from './paste';
const api = Router();

api.use('/paste', paste);

export default api;