const Song = require("../model/song");

exports.songApi = async (req, res) => {
  try {
    const data = await Song.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
