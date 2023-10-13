const express = require("express");
const app = express();
const port = 3000;

app.get("/factorial", (req, res) => {
  const { number } = req.query;
  //redirect
  return res.redirect(`/factorial/${number}`);
});

app.get("/factorial/:number", (req, res) => {
  const { number } = req.params;
  const parsedNumber = parseInt(number, 10);
  let factorialed = 1;
  for (let i = parsedNumber; i > 1; i--) {
    factorialed *= i;
  }
  res.send(`factorial of ${parsedNumber} is ${factorialed}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
