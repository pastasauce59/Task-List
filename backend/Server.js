const express =  require("express")

const mongoose = require("mongoose")
require("dotenv").config()

const routes = require("./routes/TaskRoute")

const cors = require("cors")

const app = express()
const PORT = process.env.PORT | 5001

app.use(express.json())
app.use(cors())

// To test server connection is working

// app.get("/", (req, res) => {
//     res.send("HELLO WORLD!!!")
// })

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.log(err))

app.use("api/", routes)

app.listen(PORT, () => console.log(`Listening at ${PORT}`))