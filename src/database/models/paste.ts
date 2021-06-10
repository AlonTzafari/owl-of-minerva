import {Schema, model} from 'mongoose';

const pasteSchema = new Schema({
    title: String,
    author: String,
    content: String,
    date: {type: Date, index: true}
})

const Paste = model<paste>('Paste', pasteSchema);
export default Paste;