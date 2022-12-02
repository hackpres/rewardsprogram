const { Schema, model } = require('mongoose');

const purchaseHistorySchema = new Schema(
    {
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
);

const PurchaseHistory = model('PurchaseHistory', purchaseHistorySchema);

module.exports = PurchaseHistory;