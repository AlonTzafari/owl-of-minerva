import mongoose from 'mongoose';
import {Paste, Keyword, Alert} from './models';

export function connectDB() {
    const auth = {
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'secret'
    };
    const host = process.env.DB_HOST || 'mongodb://localhost:27017';
    return mongoose.connect(host, {useNewUrlParser: true, useUnifiedTopology: true, auth, dbName: process.env.DB_NAME || 'dev'})
}

export function disconnectDB() {
    mongoose.disconnect();
}

export function savePastes(pastes: paste[]) {
    if (pastes.length < 1) return Promise.resolve();
    return Paste.create(pastes);
}

export function getLatestPaste() {
    return Paste.findOne({}).sort('-date').limit(1).exec();
}

export function getAllPastes() {
    return Paste.find({}).exec();
}

export function getPastesBySearch(searchText: string) {
    const filter = {
        $or: [
            {title: {$regex: searchText, $options: 'i'}},
            {author: {$regex: searchText, $options: 'i'}},
            {content: {$regex: searchText, $options: 'i'}},
        ]
    };

    return Paste.find(filter).exec();
}
export function getPastesBySearchFromDate(searchText: string, date: Date) {
    const filter = {
        $and:[
            {$or: [
                {title: {$regex: searchText, $options: 'i'}},
                {author: {$regex: searchText, $options: 'i'}},
                {content: {$regex: searchText, $options: 'i'}},
            ]},
            {date: {$gt: date}}
        ]
    };

    return Paste.find(filter).exec();
}

export function getAllKeywords() {
    return Keyword.find({}).exec();
}

export function saveKeyword(keyword: keyword) {
    return Keyword.create(keyword);
}

export function deleteKeyword(word: string) {
    return Keyword.findOneAndDelete({word});
}

export function getAllAlerts() {
    return Alert.find({}).exec();
}

export function saveAlert(alert: alert) {
    return Alert.create(alert);
}

export function getLastestAlertForKeyword(keyword: keyword): Promise<alert | null> {
    return Alert.findOne({
        keyword: keyword._id,
    })
    .sort('-date')
    .limit(1)
    .exec();
}

