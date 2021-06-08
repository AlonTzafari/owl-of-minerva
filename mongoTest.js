require('dotenv').config();
// MONGO_INITDB_ROOT_USERNAME: root
// MONGO_INITDB_ROOT_PASSWORD: secret
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const pasteSchema = new Schema({
    title: String,
    author: String,
});

const Paste = model('Paste', pasteSchema);


const auth = {
    user:'root',
    password: 'secret'
};

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true, auth, dbName:'dev'})
.then(async res => {
    console.log('connected successfully');
    // await Paste.create({
    //     title: 'My Title',
    //     author: 'Alon'
    // })
    Paste.countDocuments((err, count) => {
        if (err) throw err;
        console.log('doc count: ' + count);
    });
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names);
    });
    
    const pasteRes = await Paste.find({}).sort('-date').limit(1).exec();
    console.log('latest paste: ' + pasteRes);
    

})
.catch(err => console.log(err))
.finally(() => {
    setTimeout(() => {mongoose.disconnect()}, 3000);
})



