import fs from 'fs';
import Forum from './services/Forum';
import {getPastesBySearchFromDate,getAllAlerts, connectDB, disconnectDB} from './database/database';
import {Alert} from './database/models'
const testForum = async () => {
    const forum = new Forum('http://nzxj65x32vh2fkhk.onion/all?page=');
    await forum.load();
    const pastes = await forum.getAllPastes();
    const pastesStr = JSON.stringify(pastes, null, 4);
    fs.writeFileSync('dump/evil.json', pastesStr, {encoding: 'utf-8'});
    console.log('pastes exported to dump/evil.json');
}

const testPasteBySearchDate = async () => {
    await connectDB();
    const pastes = await getPastesBySearchFromDate('porn', new Date("2021-06-07T17:53:30.000Z"));
    const pastesStr = JSON.stringify(pastes, null, 4);
    const fileName = `pasteFrom${Date.now()}.json`;
    fs.writeFileSync(`dump/${fileName}`, pastesStr, {encoding: 'utf-8'});
    console.log(`pastes exported to dump/${fileName}`);
    disconnectDB();
}

const testAlerts = async () => {
    await connectDB();
    const alerts = await getAllAlerts();
    const alertsStr = JSON.stringify(alerts, null, 4);
    const fileName = `alerts.json`;
    fs.writeFileSync(`dump/${fileName}`, alertsStr, {encoding: 'utf-8'});
    console.log(`pastes exported to dump/${fileName}`);
    disconnectDB();
}

const updateDataAlertStart = async () => {
    await connectDB();
    await Alert.findOneAndUpdate({keyword: 'data'}, {date: new Date('2021-06-08T11:29:20.000Z')}).exec();
    const alert = await Alert.findOne({keyword: 'data'}).exec();
    console.log('updated alert: ', alert);
    disconnectDB();
}

updateDataAlertStart();