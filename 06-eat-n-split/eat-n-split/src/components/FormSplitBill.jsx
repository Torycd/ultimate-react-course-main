import React from "react";
import "../index.css";
import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🕴 Your Expense</label>
      <input type="text" />

      <label>X's expenses</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
