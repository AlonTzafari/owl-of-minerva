import Page from './Page';
import cheerio from 'cheerio';
import axios from './axios-tor';

export default class PastePage extends Page {
    
    async getPaste() {
        const rawPaste = await this.getPasteRaw();
        return rawPaste;
    }
    
    
    getPasteRaw() {
        const title = this.$('h4').text();
        const userDate = this.$('div.col-sm-6').first().text();
        const rawBtn = this.$('div.col-sm-7 > a.btn.btn-success').filter((i, btn) => this.$(btn).text() === 'Raw');
        const rawContentURL = rawBtn.attr('href') || '';
        return axios.get(rawContentURL)
        .then( ({data}) => {
            return {
                title,
                userDate,
                content: data
            }
        });
    }
}

// function formatRawPaste(rawPaste) {
//     const title = removeWhiteSpaces(rawPaste.title);
//     const [user, date] = seperateUserDate(rawPaste.userDate);
//     const {content} = rawPaste;
//     return {title, user, date, content};
// }