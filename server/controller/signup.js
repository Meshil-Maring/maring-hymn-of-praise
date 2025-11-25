exports.signup = async (req, res) => {
  const data = await JSON.parse(req.body);

  res.send(data);
};
