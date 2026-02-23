const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const productRoutes = require("./routes/productRoutes")
const { errorHandler } = require("./middleware/errorMiddleware")


//connect to db
connectDB()

const app = express()

//middleware
app.use(cors())
app.use(express.json())

//test route
app.get("/", (req, res) => {
    res.send("API is running...")
})

//routes
app.use("/api/products", productRoutes)

//error middleware(last)
app.use(errorHandler)


//start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})