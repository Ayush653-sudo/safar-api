const Vehicle = require('../models/vehicle');

exports.register = async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.get = async (req, res) => {
    try {
        const {ownerEmail} = req.body;
        const vehicle=await Vehicle.find({ownerEmail:ownerEmail});
        console.log(vehicle+"dd");
        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
};
