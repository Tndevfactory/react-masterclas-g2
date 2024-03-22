const asyncHandler = require("express-async-handler");
const register = asyncHandler(async (req, res) => {
  console.log("register");
  res.status(200).json({
    statut: "success",
    message: "register",
  });
});
module.exports = { register };
