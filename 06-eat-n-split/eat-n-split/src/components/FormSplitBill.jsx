import React from "react";
import "../index.css";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🕴 Your Expense</label>
      <input type="text" />

      <label>{selectedFriend.name}'s expenses</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
