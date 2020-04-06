const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    nome: String,
    modelo: String,    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('device', DeviceSchema);