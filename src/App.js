import React, { useState } from "react";

export default function App() {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");

  const addPlant = () => {
    if (!name) return;
    setPlants([...plants, { id: Date.now(), name, logs: [] }]);
    setName("");
  };

  return (
    <div style={{padding:20}}>
      <h1>Cultivar Tracker</h1>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Plant name"/>
      <button onClick={addPlant}>Add</button>

      {plants.map(p=>(
        <div key={p.id} style={{border:"1px solid #ccc",marginTop:10,padding:10}}>
          <h3>{p.name}</h3>
        </div>
      ))}
    </div>
  );
}