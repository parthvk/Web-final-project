const mongoose =require('mongoose');

/**
 * Mongoose schema for user object.
 */
const UserSchema = new mongoose.Schema({
        Username: {
            type: String,
            required: "Title is missing"
        },
        Mail: {
            type: String,
            required: "Main is missing"
        },
        Password: {
            type: String,
            required: "Password is missing"
        },
        CreatedTime: {
            type: Date,
            default: Date.now
        }
    },
);

module.exports = mongoose.model('User', UserSchema);
