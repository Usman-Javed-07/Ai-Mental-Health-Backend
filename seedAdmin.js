const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel'); // Adjust the path if needed

// ✅ Use your actual live MongoDB connection string here
mongoose.connect('mongodb+srv://usmanjaved0816:Mentalhealh1122@cluster0.sherm.mongodb.net/MentalHealth?retryWrites=true&w=majority', {

});

const admins = [
  {
    FirstName: "Usman",
    LastName: "Javed",
    username: "usmanadmin",
    email: "usmanjaved0816@gmail.com",
    password: "Usman*0#11",
    role: "admin"
  },
  {
    FirstName: "Admin",
    LastName: "Two",
    username: "admin2",
    email: "admin2@example.com",
    password: "admin123",
    role: "admin"
  },
  {
    FirstName: "Admin",
    LastName: "Three",
    username: "admin3",
    email: "admin3@example.com",
    password: "admin123",
    role: "admin"
  }
];

const createAdmins = async () => {
  try {
    for (const admin of admins) {
      const existing = await User.findOne({ email: admin.email });
      if (!existing) {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        await User.create({ ...admin, password: hashedPassword });
        console.log(`Created admin: ${admin.email}`);
      } else {
        console.log(`Admin already exists: ${admin.email}`);
      }
    }

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

createAdmins();


// node seedAdmin.js