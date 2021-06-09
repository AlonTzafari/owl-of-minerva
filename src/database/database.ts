import mongoose from 'mongoose';
import Paste from './models/paste';

export function connectDB() {
    const auth = {
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'secret'
    };
    const host = process.env.DB_HOST || 'mongodb://localhost:27017';
    return mongoose.connect(host, {useNewUrlParser: true, useUnifiedTopology: true, auth, dbName:'dev'})
}

export function savePastes(pastes: paste[]) {
    console.log('number of pastes added: ' + pastes.length);
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


