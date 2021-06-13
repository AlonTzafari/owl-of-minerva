import axios from 'axios';
const host = 'http://localhost:3001';

export const getAllPastes = () => {
    return axios.get(host + '/api/paste/all')
    .then( ({data}) => {
        return data;
    })
}

export const getPastesBySearch = (searchText: string) => {
    if (typeof searchText !== 'string') throw new Error('search text must be a string');
    if (searchText === '') return Promise.resolve([]);
    return axios.get(host + `/api/paste/search?search=${searchText}`)
    .then( ({data}) => data as paste[] );
}

export const getAllKeywords = () => {
    return axios.get(host + '/api/keyword/all')
    .then( ({data}) => data as keyword[] );
}

export const postKeyword = (keyword: keyword) => {
    return axios.post(host + '/api/keyword', {keyword});
}

export const removeKeyword = (word: string) => {
    return axios.delete(host + `/api/keyword/${word}`);
}

export const getAllAlerts = () => {
    return axios.get(host + `/api/alert/all`)
    .then(({data}) => data as verboseAlert[]);
}


