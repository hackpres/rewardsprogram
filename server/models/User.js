import { Schema, model } from 'mongoose';

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
            type: Schema.Types.ObjectId,
            ref: 'PurchaseHistory'
        }
    }
);

const User = model('User', userSchema);

module.exports = User;