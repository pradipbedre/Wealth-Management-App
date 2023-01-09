import React from "react";
import "./addassets.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import invalidToken from "../../utils/InvalidToken";

const AddAsset = () => {
  const [asset, setAsset] = useState([]);
  const [assetName, setAssetName] = useState("");
  const [assetValue, setAssetValue] = useState("");
  const [assetDetails, setAssetDetails] = useState("");
  const [assetUnite, setAssetUnite] = useState("");

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get("/api/asset");
        setAsset(res.data);
      } catch (error) {
        invalidToken(error.response.data.Auth);
      }
    };
    fetchAssets();
  }, [asset]);

  /* Creating New Asset */
  const submitAsset = async (e) => {
    //e.preventDefault();
    try {
      const res = await axios.post("/api/asset/add", {
        assetName,
        assetValue,
        additionalDetails: `${assetDetails}`,
        unit: `${assetUnite}`,
      });
    } catch (error) {
      invalidToken(error.response.data.Auth);
    }
  };

  /* Delete Aasset */
  const deleteAsset = async (e, id) => {
    try {
      const res = await axios.delete(`/api/asset/delete/${id}`);
    } catch (error) {
      invalidToken(error.response.data.Auth);
    }
  };

  return (
    <div className="addAssetsContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Add Assets</h2>
      </div>
      <form className="inputForm">
        <input
          type="text"
          placeholder="Enter Asset"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Total Value"
          value={assetValue}
          onChange={(e) => setAssetValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Additional Details"
          value={assetDetails}
          onChange={(e) => setAssetDetails(e.target.value)}
        />
        <select
          name="assets"
          value={assetUnite}
          onChange={(e) => setAssetUnite(e.target.value)}
        >
          <option value="No Unit" selected>
            No Unit
          </option>
          <option value="Rupay">Rupay</option>
          <option value="Sq-Ft">Sq-Ft</option>
          <option value="Stock Quentity">Stock Quentity</option>
          <option value="Doller($)">Doller($)</option>
          <option value="Gm">Gm</option>
        </select>
        <button type="submit" onClick={submitAsset}>
          Add
        </button>
      </form>
      <div className="tableData">
        <table width="1000" height="250">
          <thead>
            <tr className="header">
              <th>Asset</th>
              <th>Total Value</th>
              <th>Additional Details</th>
              <th>Unit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {asset &&
              asset.map((ass) => (
                <tr className="content" key={ass._id}>
                  <td>{ass.assetName}</td>
                  <td>{ass.assetValue}</td>
                  <td>{ass.additionalDetails}</td>
                  <td>{ass.unit}</td>
                  <td>
                    <button onClick={(e) => deleteAsset(e, ass._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAsset;
