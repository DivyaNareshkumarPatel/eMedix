const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRouters');
const adminRoutes = require('./routes/adminRouters.js');
const hospitalRoutes = require('./routes/hospitalRoutes.js');
const doctorRoutes = require('./routes/doctorRouters.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App is listening on port:', PORT);
});

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
