const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./Models/Users");

const port = 3001;

//Used to parse the JSON
app.use(express.json());
app.use(cors());

//MongoDB connection server
mongoose.connect("mongodb+srv://User0:123@cluster0.etmxs8f.mongodb.net/mern-crud?retryWrites=true&w=majority");

//GET request
app.get("/getUsers", (req, res) => {

    // Find or get all the users
    UserModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

//POST request
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});


// This starts the server on the given port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});