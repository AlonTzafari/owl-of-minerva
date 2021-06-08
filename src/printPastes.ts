import fs from 'fs';
import Forum from './services/Forum';
const forum = new Forum('http://nzxj65x32vh2fkhk.onion/all?page=');
const func = async () => {
    await forum.load();
    const pastes = await forum.getAllPastes();
    const pastesStr = JSON.stringify(pastes, null, 4);
    fs.writeFileSync('dump/evil.json', pastesStr, {encoding: 'utf-8'});
    console.log('pastes exported to dump/evil.json');
}

func();