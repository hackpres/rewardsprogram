const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dob: {
            type: String
        },
        purchaseHistory: {
            january: [
                Number
            ],
            february: [
                Number
            ],
            march: [
                Number
            ],
            april: [
                Number
            ],
            may: [
                Number
            ],
            june: [
                Number
            ],
            july: [
                Number
            ],
            august: [
                Number
            ],
            september: [
                Number
            ],
            october: [
                Number
            ],
            november: [
                Number
            ],
            december: [
                Number
            ],
        }
    }
);

const User = model('User', userSchema);

module.exports = User;