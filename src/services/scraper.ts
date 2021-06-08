import Forum from "./Forum";
import {getLatestPaste, savePastes} from '../database/database';
const FORUM_URL = 'http://nzxj65x32vh2fkhk.onion/all?page=';

export const collectPastes = async () => {
    const lastDate = await getLastPasteDate();

    const pastes = await extractPastes(FORUM_URL, lastDate);

    savePastes(pastes);
}

async function getLastPasteDate(): Promise<Date> {
    const latestPaste = await getLatestPaste();
    if(!latestPaste) throw 'cant get latest paste';
    return new Date(latestPaste.date);
}

async function extractPastes (url: string, lastPasteDate: Date): Promise<paste[]> {
    const forum = new Forum(url);
    await forum.load();
    const allForumPastes = await forum.getAllPastes();
    const newPastes = allForumPastes.filter(paste => paste.date > lastPasteDate);
    return newPastes;
}

