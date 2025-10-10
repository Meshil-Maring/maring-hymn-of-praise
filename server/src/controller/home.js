exports.home = async (req, res) => {
  try {
    const data = "Home page";
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
