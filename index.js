const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");
const app = express();
const path = require("path");

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  cors({ origin: "https://kristinacarlsen.herokuapp.com", credentials: true })
);

app.all("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/api", (req, res) => {
  res.send("API server: running");
});

app.post("/api/form", async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NODEMAILER_ADDRESS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: req.body.name,
    to: process.env.NODEMAILER_ADDRESS,
    replyTo: req.body.email,
    subject: `Portfolio Site || ${req.body.name}, from my Portfolio Site`,
    html: `
            <p style="text-align: center; font-size: 16px">
              A message from <strong>${req.body.name}</strong>.
            </p>

            <p style="text-align: center; font-size: 14px">
              Reply to <strong>${req.body.name}</strong>:
              <a href="mailto:${req.body.email}">${req.body.email}</a>
            </p>

            <br>
            <Strong>Message:</strong>
            <p style="font-size: 15px">${req.body.message}</p>`
  };

  await transporter.sendMail(mailOptions, function(err, data) {
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
