const Ride = require('../models/ride');

exports.book = async (req, res) => {
    try {
        const ride = new Ride(req.body);
        await ride.save();
        res.status(201).send(ride);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find();
        res.send(rides);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
};
exports.searchRides = async (req, res) => {
    try {
        const { origin, destination } = req.body;
        const rides = await Ride.find({ origin:origin, destination:destination });
        res.send(rides);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
};
exports.addPassenger = async (req, res) => {
   
    let { id } = req.params;
    id = id.trim();
    const { passengerId } = req.body;
    try {
        const ride = await Ride.findByIdAndUpdate(id, { $push: { passengers: passengerId } }, { new: true });
        if (!ride) {
            return res.status(404).send({ error: 'Ride not found' });
        }
        res.send(ride);
    } catch (error) {
        res.status(400).send(error);
    }
};

