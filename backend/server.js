const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// express necessary middleware
// to enable CORS
app.use(cors());
// secures express apps by setting HTTP response headers
app.use(helmet());
// compresses response bodies for all requests
app.use(compression());
// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const articlesRouter = require("./routes/routes.js");

const PORT = process.env.REACT_APP_SERVER_PORT;

app.use("/articles", articlesRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
