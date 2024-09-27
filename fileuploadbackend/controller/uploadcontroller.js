import FileModel from "../fileschema/fileschema.js";
const uploadController = async (req, res) => {
  const file = req.file;
  // console.log(file.size / (1024 * 1024) + " MB");
  if (file.size > 1024 * 1024 * 10) {
    res.status(400).send("File size is too large");
    return;
  }
  console.log(file);
  await FileModel.create({
    name: file.originalname,
    size: file.size,
    type: file.mimetype,
    url: file.path,
  }).catch((err) => {
    console.log("Cant' upload to database: " + err);
  });
  res.status(200).send("File uploaded successfully");
};

export default uploadController;
