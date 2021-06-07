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

// function extractFromHTML(HTML: string, extractionMap: extractionMap) {
//     const output: {[key: string] : any} = {};
//     const $ = cheerio.load(HTML);
//     extractionMap.forEach(extraction => {
//         const {name, selector, attribute} = extraction;
//         if(attribute === 'text') output[name] = $(selector).text();
//         else output[name] = $(selector).attr(attribute);
//     })
//     return output;
// }