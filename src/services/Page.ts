import axios from './axios-tor';
import cheerio from 'cheerio';

export default class Page {
    url;
    HTML: string = '';
    isExists = false;
    $: cheerio.Root = cheerio.load('');
    pastes: paste[] = [];
    constructor(url: string) {
        this.url = url;
        
    }

    load(loadURL? : string | undefined) {
        const urlToGet = loadURL || this.url;
        return axios.get(urlToGet)
        .then(res => {
            const isHTML = res.headers['content-type'] === 'text/html; charset=UTF-8';
            this.HTML = isHTML ? res.data : '';
            this.$ = cheerio.load(this.HTML);
            this.isExists = isHTML;
        }).catch(err => {
            this.isExists = false;
        });
    }
}