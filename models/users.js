const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: String,

}, {versionKey: false, timestamps: true});


module.exports = mongoose.model('Users', UserSchema);