const express = require("express");
const mongoose = require("mongoose");
// const carRoutes = require("./Routes/carRouter")
const userRoutes = require("./View/userRoutes")

const app = express();

const port = 8000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
mongoose
  .connect("mongodb+srv://Anudeep123:12345678aA$@cluster0.ni9vp.mongodb.net/Attainu?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).catch(err => {console.log(err)} )

  app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/" , (req,res) => {
    res.send("Workinggg")
} )

app.use("/api",userRoutes)

app.listen( port , () => {  console.log(`Port started running on ${port}`)});