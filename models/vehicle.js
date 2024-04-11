const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    VehcileRegistrationId: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    ownerEmail: {
        type: String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
