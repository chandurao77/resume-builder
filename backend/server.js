const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');  // Update to use the user model

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/resume-builder', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.status(201).send({ message: 'User registered' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user._id }, 'secret');
  res.send({ token });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
