const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const app = express();
const path = require("path");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  cors({ origin: "https://kristinacarlsen.herokuapp.com", credentials: true })
);

app.all("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.send("API server: running");
});

app.post("/api/form", async (req, res) => {
  let email = {
    to: process.env.NODEMAILER_ADDRESS,
    from: req.body.email,
    subject: `Portfolio Site || ${req.body.name}, from my Portfolio Site`,
    html: `<div>
    <p style="text-align: center; font-size: 16px">
    A message from <strong>${req.body.name}</strong>.
  </p>

  <p style="text-align: center; font-size: 14px">
    Reply to <strong>${req.body.name}</strong>:
    <a href="mailto:${req.body.email}">${req.body.email}</a>
  </p>

  <br>
  <Strong>Message:</strong>
  <p style="font-size: 15px">${req.body.message}</p>
    </div>`
  };

  await sgMail.send(email, function(err, data) {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Email sent successfully");
    }
  });

  await res.status(200).json({ msg: "email sent" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
