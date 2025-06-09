import React from "react";
import Friend from "./Friend";


const FriendsList = ({list, onSelect, selectedFriend}) => {
//   const friends = initialFriends;
  return (
    <ul>
      {list.map((friend) => (
        <Friend onSelect={onSelect} selectedFriend={selectedFriend} key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
