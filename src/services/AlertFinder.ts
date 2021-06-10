import {getAllKeywords, saveAlert, getPastesBySearchFromDate, getLastestAlertForKeyword} from '../database/database';
import { Alert } from '../database/models';

export default class AlertFinder {
    #updateInterval;
    #keywordIntervals = {} as {[key: string]: NodeJS.Timeout};
    #keywords: keyword[] = [];

    constructor(interval: number) {
        this.#updateInterval = interval; 
    }
    
    async init() {
        const newKeywords = await getAllKeywords();
        setInterval( () => {
            getAllKeywords().then(this.updateKeywords);
        }, this.#updateInterval);
    }

    private updateKeywords(newKeywords: keyword[]) {
        if ( !this.isKeywordsOutdated(newKeywords) ) return;
        const keywordsToAdd = newKeywords.filter(newKeyword => !this.#keywords.some(keyword => keyword._id === newKeyword._id));
        const keywordsToRemove = newKeywords.filter(newKeyword => !this.#keywords.some(keyword => keyword._id === newKeyword._id),);

        keywordsToAdd.forEach(keyword => {
            this.#keywordIntervals[keyword._id] = setInterval(() => createAlert(keyword), keyword.interval);
        });

        keywordsToRemove.forEach(keyword => {
            clearInterval( this.#keywordIntervals[keyword._id] );
        });

        this.#keywords = newKeywords;
    }

    private isKeywordsOutdated(newKeywords: keyword[]) {
        if (this.#keywords.length !== newKeywords.length) return false;
        return newKeywords.every(newKeyword => {
            return this.#keywords.some(keyword => keyword._id === newKeyword._id)
        });
    }

}

function createAlert(keyword: keyword) {
    getLastestAlertForKeyword(keyword)
    .then(lastAlert => getPastesBySearchFromDate(keyword.word, lastAlert?.date || new Date('01-01-1997')))
    .then( (pastes) => {
        const alert: alert = {
            keyword: keyword._id,
            date: new Date(),
            pastes: pastes.map(paste => paste._id),
            seen: false
        }
        Alert.create(alert);
    })
} 