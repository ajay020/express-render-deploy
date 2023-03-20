const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
