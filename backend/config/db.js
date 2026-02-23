const mongoose = require("mongoose")


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, { family: 4 })
        console.log("MongoDB connected")
    }catch(err){
        console.error("DB connection error", err)
        process.exit(1)
    }
}

module.exports = connectDB