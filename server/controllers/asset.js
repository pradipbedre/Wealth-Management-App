import Asset from "../models/Asset.js";

// create Asset
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

//Update Asset

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
// Get All Assets
export const getAssets = async (req, res) => {
  try {
    const userId = req.user.id;
    const allAssets = await Asset.find({ userId });
    res.status(200).json(allAssets);
  } catch (error) {
    console.log(error);
  }
};

// Delete Asset
export const deleteAsset = async (req, res) => {
  try {
    const id = req.params.id;
    await Asset.findByIdAndDelete(id);
    res.status(200).json("Asset deleted successfully.");
  } catch (error) {
    console.log(error);
  }
};
