import mongoose from 'mongoose';
import Paste from './models/paste';

export function connectDB() {
    const auth = {
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'secret'
    };
    const host = process.env.DB_HOST || 'mongodb://localhost:27017';
    mongoose.connect(host, {useNewUrlParser: true, useUnifiedTopology: true, auth, dbName:'minerva'})
}

export function savePastes(pastes: paste[]) {
    return Paste.insertMany(pastes);
}

export function getLatestPaste() {
    return Paste.findOne({}).sort('-date').limit(1).exec();
}

export function getAllPastes() {
    return Paste.find({}).exec();
}

