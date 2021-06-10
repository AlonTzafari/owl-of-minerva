import {Schema, model} from 'mongoose';

const keywordSchema = new Schema({
    word: {
        type: String,
        unique: true
    },
    interval: Number,
})

const Keyword = model<keyword>('Keyword', keywordSchema);
export default Keyword;