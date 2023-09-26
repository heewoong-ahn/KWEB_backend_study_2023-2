const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

app.use(router);
app.use("/path", router); // /path경로에서 middleware실행?
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
