import Page from './Page';
import cheerio from 'cheerio';
import axios from './axios-tor';

export default class PastePage extends Page {
    
    async getPaste() {
        const rawPaste = await this.getPasteRaw();
        return formatRawPaste(rawPaste);
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

function formatRawPaste(rawPaste: {title: string, userDate: string, content: string}): paste {
    const title = rawPaste.title.replace(/[\t\n]/g, '');
    const userDate = rawPaste.userDate.replace(/[\t\n]|Posted by /g, '');

    const [author, dateStr] = userDate.split(' at ');
    const date = new Date(dateStr);
    const content = rawPaste.content.trim();
    return {title, author, date, content};
}