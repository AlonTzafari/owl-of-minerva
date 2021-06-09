import axios from 'axios';
const host = 'http://localhost:3001';

export const getAllPastes = () => {
    return axios.get(host+'/api/paste/all')
    .then( ({data}) => {
        return data;
    })
}