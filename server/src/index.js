const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // gửi từ code javascript
app.use(bodyParser.urlencoded({ extended: true })); // gửi từ client
route(app);

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

