const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('./config');
const conn = mongoose.createConnection(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const UserModel = conn.model('User', new Schema({
    name: { type: String },
    password: { type: String }
},{ timestamps: true ,    toJSON: {
    transform: function (_doc, result) {
        result.id = result._id;
        delete result._id;
        return result;
    }
}}));

module.exports = {
    UserModel
}