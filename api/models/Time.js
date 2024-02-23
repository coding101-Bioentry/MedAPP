const mongoose = require('mongoose');
const {Schema} = mongoose;

const TimeSchema = new Schema({
    origin_time: Date,
    time: Date,
    medication_info: Boolean,
});

const TimeModel = mongoose.model('Time', TimeSchema);

module.exports = TimeModel;