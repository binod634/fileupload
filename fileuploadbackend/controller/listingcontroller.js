import FileModel from "../fileschema/fileschema.js";
const listingController = async (req, res) => {
  const data = await FileModel.find({});
  if (data.length === 0) {
    res.status(404).send("No files found");
    return;
  }
  res.status(200).json({ files: data });
};

export default listingController;
