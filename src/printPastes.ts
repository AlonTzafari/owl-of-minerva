import Forum from './services/Forum';
import {collectPastes} from './services/scraper';
const forum = new Forum('http://nzxj65x32vh2fkhk.onion/all?page=');
const func = async () => {
    await forum.load();
    const pastes = await forum.getAllPastes();
    console.log(pastes);
}

collectPastes();