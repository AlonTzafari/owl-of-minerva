import {Schema, model, SchemaTypes} from 'mongoose';

const alertSchema = new Schema({
    keyword: SchemaTypes.ObjectId,
    date: Date,
    pastes: [String],
    seen: Boolean
})

const Alert = model<alert>('Alert', alertSchema);
export default Alert;