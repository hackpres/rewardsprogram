import { Schema, model } from 'mongoose';

const purchaseHistorySchema = new Schema(
    {
        january: [{
            type: Number
        }],
        february: [{
            type: Number
        }],
        march: [{
            type: Number
        }],
        april: [{
            type: Number
        }],
        may: [{
            type: Number
        }],
        june: [{
            type: Number
        }],
        july: [{
            type: Number
        }],
        august: [{
            type: Number
        }],
        september: [{
            type: Number
        }],
        october: [{
            type: Number
        }],
        november: [{
            type: Number
        }],
        december: [{
            type: Number
        }],
    }
);

const PurchaseHistory = model('PurchaseHistory', purchaseHistorySchema);

module.exports = PurchaseHistory