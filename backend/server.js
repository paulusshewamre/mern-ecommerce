const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()

//middleware
app.use(cors)
app.use(express.json())

//test route
app.get("/", (req, res) => {
    res.send("API is running...")
})


//connect to mongoos
mongoose.connect(process.env.MONGO_URI, {
    family: 4
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('DB connection error', err))


//start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})