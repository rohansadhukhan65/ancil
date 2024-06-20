import mongoose from "mongoose";

export const MongoConnect = async () => {
  try {
    // if (mongoose.connection.readyState >= 1) {
    //   console.log('already established')
    //   return mongoose.connection
    // }
    // mongoose.connect("mongodb://localhost:27017/ancil")
    mongoose.connect(`${process.env.DATABASE_URL}`)
    const connection = mongoose.connection
    connection.once('open', () => {
      console.log('MongoDB database connection established successfully')
    })

    connection.on('error', (err) => {
      console.log('MongoDB connection error. ' + err)
      process.exit()
    })

    return connection
  } catch (e) {
    console.log('Could not connect to MongoDB')
    console.log(e)
  }
};



 