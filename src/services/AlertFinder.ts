import {saveAlert, getPastesBySearchFromDate, getLastestAlertForWord} from '../database/database';

export default class AlertFinder {
    #searchInterval: NodeJS.Timeout;
    _keyword: keyword;

    constructor(keyword: keyword) {
        this._keyword = keyword;
        this.#searchInterval = setInterval(this.scanAlert.bind(this), this._keyword.interval);
    }
    
    terminate() {
        clearInterval(this.#searchInterval);
    }

    getId() {
        return this._keyword._id;
    }

    private async scanAlert() {
        const lastAlert = await getLastestAlertForWord(this._keyword.word);
        if(!lastAlert) return this.setBaseAlert();
        this.createAlert(lastAlert.date);
    }

    private async createAlert(dateToSearchFrom: Date) {
        const {word} = this._keyword;
        const pastes = await getPastesBySearchFromDate(this._keyword.word, dateToSearchFrom);
        if (pastes.length === 0) return;      
        const alert: alert = {
            keyword: word,
            date: new Date(),
            pastes: pastes.map(paste => paste._id),
            seen: false
        };
        saveAlert(alert);
    }
    
    private setBaseAlert() {
        const {word} = this._keyword;
        const alert: alert = {
            keyword: word,
            date: new Date(),
            pastes: [],
            seen: true
        };
        saveAlert(alert);
    }
}
