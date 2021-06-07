import axios from './axios-tor';
const URL = 'http://nzxj65x32vh2fkhk.onion/all?page=';

type paste = {
    title: string,
    author: string,
    content: string,
    date: Date
}

const collectPastes = () => {
    //get last collected paste from database (for paste date)

    //extract pastes while paste newer than last collected OR collected all

    //save collected pastes to database
}



function extractPastes (url: string, lastPasteDate: Date) {
    let page = 1;
    let isPageExists: boolean;
    let isAnyPasteNew: boolean;
    const newPastes: paste[] = [];
    do {
        //get Page
        //check page existence
        isPageExists = true;
        //extract pastes from page
        //check if any pastes older than lastPasteDate
        isAnyPasteNew = true;
        //add pastes to array
        page++;
    } while (isPageExists && isAnyPasteNew)
    return newPastes;
}



