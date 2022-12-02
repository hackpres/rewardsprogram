const { Schema, model } = require('mongoose');
const User = require('./User');

const purchaseHistorySchema = new Schema(
    {   
        username: [{
            type: String,
            ref: User
        }],
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
);

const PurchaseHistory = model('PurchaseHistory', purchaseHistorySchema);

module.exports = PurchaseHistory;