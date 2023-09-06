//Hàm connect db
// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/mydata')
        .then(() => console.log('Connected!'));
} module.exports = { connect };