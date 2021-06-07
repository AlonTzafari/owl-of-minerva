import Forum from "./Forum";

const FORUM_URL = 'http://nzxj65x32vh2fkhk.onion/all?page=';

const collectPastes = () => {
    //get last collected paste from database (for paste date)

    //extract pastes while paste newer than last collected OR collected all

    //save collected pastes to database
}

async function getLastPasteDate(): Promise<Date> {
    return new Date('01-01-2021');
}

async function extractPastes (url: string, lastPasteDate: Date): Promise<paste[]> {
    const forum = new Forum(url);
    await forum.load();
    const allForumPastes = await forum.getAllPastes();
    // const newPastes = allForumPastes.filter(paste => paste.date > lastPasteDate);
    const newPastes: paste[] = [] 
    return newPastes;
}

function savePastes(pastes: paste[]): void {

}



