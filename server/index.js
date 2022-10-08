const cors = require("cors");
const express = require("express");
const app = express();

const port = 3001;

// This starts the server on the given port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});