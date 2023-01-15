const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 4000;

const route = require("./route/route");

app.use(bodyParser.urlencoded({ extended: false }));
const cors = require("cors");
app.use(cors({ origin: true }));

app.use("/", route);

//Email send code with the help of mailtrap

app.post("/sendEmail", async (req, res) => {
  let { name, email, number, hobbies } = req.body;
  const transport = nodemailer.createTransport({
    Host: "smtp.mailtrap.io",
    Port: "25 or 465 or 587 or 2525",
    auth: {
      user: "380d5b74e61cfe",
      pass: "4e05dfbf5bc00d",
    },
  });

  await transport.sendMail({
    from: "aryan@gmail.com",
    to: "info@redpositive.in",
    subject: "intern",
    html: `
    <div>
    <p>${name}</p>
    <p>${email}</p>
    <p>${number}</p>
    <p>${hobbies}</p>
    </div>`,
  });
});

app.listen(PORT, function (req, res) {
  console.log(`Server running on PORT ${PORT}`);
});
