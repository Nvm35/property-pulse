import mongoose from 'mongoos'
let connected = false;
const connectDB = async () => {
  mongoose.set('strictQuery', true)

  if (connected) {
    console.log("MongoDB is already connected")
    return;
  }

  try {
    await mongoose.connect(process.inv.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected ...')
  } catch (error) {
    console.log(error)

  }
}