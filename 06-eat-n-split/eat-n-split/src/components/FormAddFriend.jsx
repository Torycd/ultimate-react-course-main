import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({onAdd}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = Math.random();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAdd(newFriend)
    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬Friend name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />

      <label>🖼 Image URL</label>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="text"
      />
      <Button>Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
