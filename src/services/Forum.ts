import axios from './axios-tor';
import Page from './Page';
import PastePage from './PastePage';

export default class Forum extends Page {
    pageNumber: number = 1;
    pastePages: PastePage[] = [];

    constructor (url: string, startPage?: number | undefined) {
        super(url);
        if (startPage) this.pageNumber = startPage;
    }

    async getAllPastes() {
        const allPastes = [];
        while(this.isExists) {
            await this.loadPastePagesFromCurrentPage();
            
            const allPagePastes = await this.getPastesFromPage();
            if (allPagePastes.length === 0) break;
            allPastes.push(...allPagePastes);
            await this.nextPage();
        }
        return allPastes;
    }

    loadPastePagesFromCurrentPage() {
        const pastePagesURLs: string[] = [];
        const pasteAnchors = this.$('a.btn.btn-success');
        pasteAnchors.each((i, link) => {
            const pasteURL = this.$(link).attr('href') || '';
            pastePagesURLs.push(pasteURL);
        });
        this.pastePages = pastePagesURLs.map( url => new PastePage(url) );
        const loadAll = this.pastePages.map( pastePage => pastePage.load() );
        return Promise.all(loadAll);
    }

    async getPastesFromPage() {
        const getPasteFromAll = this.pastePages.map( pastePage => pastePage.getPaste() );
        const pagePastes = await Promise.all(getPasteFromAll);
        return pagePastes;
    }

    nextPage() {
        this.pageNumber++;
        return this.load(this.url + this.pageNumber);
    }

    
}

