import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [list, setList] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAdd(newFriend) {
    setList((oldFriends) => [...oldFriends, newFriend]);
    setAddFriend(false);
  }
  function handleSelected(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          list={list}
          selectedFriend={selectedFriend}
          onSelect={handleSelected}
        />

        {addFriend && (
          <FormAddFriend selectedFriend={selectedFriend} onAdd={handleAdd} />
        )}

        <Button onClick={() => setAddFriend(!addFriend)}>
          {!addFriend ? "Add friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

export default App;
