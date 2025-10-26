const Song = require("../model/song");

exports.song = async (req, res) => {
  const songId = parseInt(req.params.id);

  try {
    const data = await Song.findOne({ id: songId });

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
