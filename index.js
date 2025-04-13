import express from "express";
import bodyParser from "body-parser";
import ReactDom from "react-dom";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    ReactDom.render()
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});