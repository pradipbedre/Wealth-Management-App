import React from "react";
import "./addassets.scss";
import { Link } from "react-router-dom";
const AddAsset = () => {
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
      <div className="tableData" style={{ overflowX: "scroll" }} >
        <table width="1000" height="250" >
          <tr className="header">
            <th>Asset</th>
            <th>Total Value</th>
            <th>Additional Details</th>
            <th>Unit</th>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
          <tr className="content">
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
            <td>Ramesh Raman</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddAsset;
