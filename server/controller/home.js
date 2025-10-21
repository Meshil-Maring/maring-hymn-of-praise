const Song = require("../model/song");

exports.home = async (req, res) => {
  try {
    const data = await Song.find();

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
