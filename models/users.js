const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: String,

}, {versionKey: false, timestamps: true});
UserSchema.set('collection', 'users');

module.exports = mongoose.model('Users', UserSchema);