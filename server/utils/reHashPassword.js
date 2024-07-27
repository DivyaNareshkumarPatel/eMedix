const bcrypt = require('bcrypt');
const User = require('../models/userModels');

async function rehashPassword(email, newPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.updateOne({ email }, { password: hashedPassword });
    console.log(`Password for ${email} has been re-hashed and updated.`);
  } catch (error) {
    console.error('Error re-hashing and updating password:', error);
  }
}
rehashPassword('divyamyindia271@gmail.com', 'yourKnownPassword');
