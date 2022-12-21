import Asset from "../models/Asset.js";

export const addAsset = async (req, res) => {
  //console.log(req.user);
  try {
    const newAsset = new Asset({ userId: req.user.id, ...req.body });
    const savedAsset = await newAsset.save();
    res.status(200).json(savedAsset);
  } catch (error) {
    console.log(error);
  }
};

export const updateAsset = async (req, res) => {
  //console.log(req.body);
  try {
    const id = req.params.id;
    const updatedAsset = await Asset.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedAsset);
  } catch (error) {
    console.log(error);
  }
};

export const getAssets = async (req, res) => {
  try {
    const allAssets = await Asset.find();
    res.status(200).json(allAssets);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAsset = async (req, res) => {
  try {
    const id = req.params.id;
    await Asset.findByIdAndDelete(id);
    res.status(200).json("Asset deleted successfully.");
  } catch (error) {
    console.log(error);
  }
};
