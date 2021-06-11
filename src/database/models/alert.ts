import {Schema, model, SchemaTypes} from 'mongoose';

const alertSchema = new Schema({
    keyword: String,
    date: Date,
    pastes: [String],
    seen: Boolean
})

const Alert = model<alert>('Alert', alertSchema);
export default Alert;