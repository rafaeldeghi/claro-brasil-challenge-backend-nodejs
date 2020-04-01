const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    phone: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('device', DeviceSchema);