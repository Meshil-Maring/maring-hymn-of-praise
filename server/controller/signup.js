const express = require("express");

exports.signup = async (req, res) => {
  const data = req.body;

  res.json({ message: "OTP imformation", data });
};
