const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    availableCapacity:{
   type:Number,
   required:true
    },
    vehicleId: {
        type: String,
        required:true
    },
    driver: {
        type: String,
        required:true
    },
    passengers: [{
        type: String,
        
    }]
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
