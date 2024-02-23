require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const Time = require('./models/Time.js');
const cookieParser = require('cookie-parser');


const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';


app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));


function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get('/test', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.json('test ok');
  console.log('test ok');
});

app.post('/register', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { name, email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    res.status(422).json('User already exists.');
    return;
  }
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    console.log(userDoc);
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post('/login', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({
        email: userDoc.email,
        id: userDoc._id
      }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status(422).json('Password not match.');
    }
  } else {
    res.status(422).json('User not found.');
  }
});

app.get('/profile', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true);
});

app.post('/medtime', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { origin_time, time, medication_info } = req.body;
  try {
    const medication_time = await Time.create({
      origin_time,
      time,
      medication_info,
    });
    console.log(medication_time);
    res.json(medication_time);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.get('/record', (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err) => {
      if (err) throw err;
      const allTimeData = await Time.find();
      res.json(allTimeData);
      console.log(allTimeData);
    });
  } else {
    res.json(null);
  }
});



app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});