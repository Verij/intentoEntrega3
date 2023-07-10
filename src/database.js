import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Verijero:iC7mMC0Njpm3dzrM@cluster0.8okkfv6.mongodb.net/")
  .then(db => console.log('DB esta conectada'))
  .catch(error => console.log(error))