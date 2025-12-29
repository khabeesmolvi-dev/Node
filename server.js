const express = require("express");
const sendTelegramMessage = require("./telegram");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("page1"));

app.post("/step2", (req, res) => {
  const msg = `
📘 School Project Demo
Name: ${req.body.firstName} ${req.body.lastName}
City: ${req.body.city}
`;

  sendTelegramMessage(msg);
  res.render("page2");
});

app.post("/loading", (req, res) => res.render("loading"));

app.get("/final", (req, res) => res.render("page3"));

app.post("/thankyou", (req, res) => res.render("thankyou"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
