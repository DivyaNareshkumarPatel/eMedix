require('dotenv').config();
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

// Define the hospital schema
const hospitalSchema = new mongoose.Schema({
  name: String,
  location: String,
  contactNumbers: [String],
  emails: [String],
  workingHours: {
    monSat: String,
    sunday: String,
  },
  hospitalPhoto: String,
  displayPhoto: String,
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

// Define the doctor schema with added fields
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitalName: { type: String, required: true },
  hospitalLocation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  availability: { type: Boolean, default: true },
  message: { type: String },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

// Connect to MongoDB and generate data
mongoose.connect(process.env.mongoURI)
  .then(() => {
    console.log('MongoDB connected');
    generateData();
  })
  .catch(err => {
    console.log('MongoDB connection error:', err);
  });

async function generateData() {
  try {
    for (let i = 0; i < 100; i++) {
      const hospital = new Hospital({
        name: faker.company.name(),
        location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, India`,
        contactNumbers: [faker.phone.number(), faker.phone.number()],
        emails: [faker.internet.email(), faker.internet.email()],
        workingHours: {
          monSat: '9:00 AM - 6:00 PM',
          sunday: '10:00 AM - 2:00 PM'
        },
        hospitalPhoto: `https://via.placeholder.com/400x300.png?text=Hospital+${i + 1}`,
        displayPhoto: `https://via.placeholder.com/300x200.png?text=Display+${i + 1}`
      });

      await hospital.save();

      const numberOfDoctors = faker.datatype.number({ min: 4, max: 5 });
      for (let j = 0; j < numberOfDoctors; j++) {
        const doctor = new Doctor({
          name: faker.name.fullName(),
          hospitalName: hospital.name,
          hospitalLocation: hospital.location,
          contactNumber: faker.phone.number(),
          email: faker.internet.email(),
          password: faker.internet.password(),  // Generate a random password
          image: `https://via.placeholder.com/150x150.png?text=Doctor+${j + 1}`,
          availability: faker.datatype.boolean(),  // Random availability status
          message: faker.lorem.sentence()  // Short message
        });

        await doctor.save();
      }
    }

    console.log('Data generation completed');
  } catch (error) {
    console.error('Error generating data', error);
  } finally {
    mongoose.connection.close();
  }
}
