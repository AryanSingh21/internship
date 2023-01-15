const express = require("express");

const router = express.Router();

router.get("/api", (req, res) => {
  const str = {
    name: "Aryan",
    age: "22",
  };
  res.send(str);
  console.log(str);
});

router.post("/register", async (req, res) => {
  const { name, email, number, hobbies } = req.body;

  if (!name || !email || !number || !hobbies) {
    return res.status(401).json({
      success: false,
      messeage: " please fill all the field property",
    });
  }
  const memberExist = await Member.findOne({ email: email });
  try {
    if (memberExist) {
      return res.status(200).json({
        success: true,
        message: " user already exist",
      });
    } else {
      const member = new Member({ name, email, number, hobbies });
      await user.save();

      res.status(200).json({
        success: true,
        message: "Member updated",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
