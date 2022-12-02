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
            january: [{
                type: Number,
                nullable: true,
            }],
            february: [{
                type: Number,
                nullable: true,
            }],
            march: [{
                type: Number,
                nullable: true,
            }],
            april: [{
                type: Number,
                nullable: true,
            }],
            may: [{
                type: Number,
                nullable: true,
            }],
            june: [{
                type: Number,
                nullable: true,
            }],
            july: [{
                type: Number,
                nullable: true,
            }],
            august: [{
                type: Number,
                nullable: true,
            }],
            september: [{
                type: Number,
                nullable: true,
            }],
            october: [{
                type: Number,
                nullable: true,
            }],
            november: [{
                type: Number,
                nullable: true,
            }],
            december: [{
                type: Number,
                nullable: true,
            }],
        }
    }
);

const User = model('User', userSchema);

module.exports = User;