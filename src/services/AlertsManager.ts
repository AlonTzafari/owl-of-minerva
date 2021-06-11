import {getAllKeywords} from '../database/database';
import AlertFinder from './AlertFinder';

export default function alertsManager() {
    const alertFinders = [] as AlertFinder[];

    getAllKeywords().then( keywords => updateAlertFinders(keywords) );
    
    setInterval(async () => {
        const keywords = await getAllKeywords();
        updateAlertFinders(keywords);
    }, 60000);

    function updateAlertFinders(newKeywords: keyword[]) {
        if ( !isAlertFindersOutdated(newKeywords) ) return;
        const keywordsToAdd = newKeywords.filter(newKeyword => !alertFinders.some(alertFinder => alertFinder.getId() === newKeyword._id));
        const alertFindersToRemove = alertFinders.filter( (alertFinder, index) => !newKeywords.some( newKeyword => newKeyword._id === alertFinder.getId() ) );
        
        alertFindersToRemove.forEach(alertFinder => {
            const alertFinderId = alertFinder.getId();
            alertFinder.terminate();
            const indexToRemove = alertFinders.findIndex(alertFinder => alertFinder.getId() === alertFinderId)
        });
        
        keywordsToAdd.forEach(keyword => {
            alertFinders.push(new AlertFinder(keyword))
        });
    }

    function isAlertFindersOutdated(newKeywords: keyword[]): boolean {
        if (alertFinders.length !== newKeywords.length) return true;
        return newKeywords.every(newKeyword => {
            return alertFinders.some(alertFinder => alertFinder.getId() === newKeyword._id);
        });
    }
}