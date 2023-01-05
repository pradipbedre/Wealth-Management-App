import React from "react";
import "./addassets.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { removeCookie } from "../../utils/Cookie";

const AddAsset = () => {
  const [asset, setAsset] = useState("");

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get("/api/asset");
        setAsset(res.data);
        console.log(asset);
      } catch (error) {
        if (!error.response.data.Auth) {
          removeCookie("jwt_token");
        }
      }
    };
    fetchAssets();
  }, []);

  return (
    <div className="addAssetsContainer">
      <div className="navbar">
        <Link to="/dashboard">
          <button className="dashboard">Dashboard</button>
        </Link>
        <h2>Add Assets</h2>
      </div>
      <form className="inputForm">
        <input type="text" placeholder="Select Asset" />
        <input type="text" placeholder="Total Value" />
        <input type="text" placeholder="Additional Details" />
        <select name="assets">
          <option value="Rupay">Rupay</option>
          <option value="Sq-Ft">Sq-Ft</option>
          <option value="Stock Quentity">Stock Quentity</option>
          <option value="Doller($)">Doller($)</option>
          <option value="No Unit" selected>
            No Unit
          </option>
        </select>
        <button type="submit">Add</button>
      </form>
      <div className="tableData" style={{ overflowX: "scroll" }}>
        <table width="1000" height="250">
          <thead>
            <tr className="header">
              <th>Asset</th>
              <th>Total Value</th>
              <th>Additional Details</th>
              <th>Unit</th>
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAsset;
