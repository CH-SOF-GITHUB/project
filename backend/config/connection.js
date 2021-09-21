const mongoose = require('mongoose');
const config = require("config");
const db = config.get('db');

async function connection() {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('data base connected successfuly !')
    } catch (error) {
        console.log('data base with error !' + error);
    }
}
module.exports = connection;