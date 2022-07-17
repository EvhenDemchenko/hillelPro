const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }, {timestamps: true, versionKey: false,}
);

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;