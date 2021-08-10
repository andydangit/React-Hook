///////// Hook -- UseEffect

import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [resourceType, SetResourceType] = useState("posts");
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => SetResourceType("posts")}> Posts </button>
        <button onClick={() => SetResourceType("users")}> Users </button>
        <button onClick={() => SetResourceType("comments")}> Comments </button>
      </div>
      <h1> {resourceType} </h1>
      {items.map(item => {
        return <pre> {JSON.stringify(item)} |</pre> 
      })}
    </>
  );
}
