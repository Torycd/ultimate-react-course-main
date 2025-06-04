import React, {useState} from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


const App = () => {
   const [items, setItems] = useState([]);
   function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default App;
