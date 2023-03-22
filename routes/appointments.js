const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phone, date } = req.body;

    const appointment = new Appointment({
        name,
        email,
        phone,
        date,
    });

    try {
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
