const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./Models/Users");

const port = 3001;

//MongoDB connection server
mongoose.connect("mongodb+srv://User0:123@cluster0.etmxs8f.mongodb.net/mern-crud?retryWrites=true&w=majority");

//
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


// This starts the server on the given port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});