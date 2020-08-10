import React, {useState, useEffect} from 'react';

import './App.css';

function App() {

  const [box, setBox] = useState ([]);

  useEffect(() => {
    let box = [
      { id:1, color:"Orange"},
      { id:2, color: "Bleu" },
      { id: 3, color: "Jaune" },
      { id: 4, color: "Rouge" },
      { id: 5, color: "Vert" }
    ];
    setBox(box.map(d => {
      return {
      select: false,
      id: d.id,
      color: d.color};
    }));
    
  }, [])

  return (
    <div className="container">
      <div className="row">
    
        <div className="col-sm ">
      <table className="table table-bordered mt-5 ">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>
              <input type="checkbox"
              onChange={event => {
                let checked = event.target.checked;
                setBox(box.map(d => {
                  d.select = checked;
                  return d;
                }))
              }}
              ></input> Select All
            </th>
            <th scope="col">Color</th>
          </tr>
        </thead>
        <tbody>
          {box.map((d,i) => (
          <tr key={d.id}>
              <th > <input onChange={ e =>{
              let checked = e.target.checked;
              setBox(
                box.map(data => {
                if (d.id ===data.id)
                {
                  data.select = checked;
                }
                return data;
              }))
            }} 
            type="checkbox" 
            checked={d.select}
            ></input>
            </th>
          <td>{d.color}</td> 
          </tr>))}
        </tbody>
      </table>
    
      </div>
        <div className="col-sm mt-5 ">
         
   
      </div>
      </div>
    </div>
    
  );
}

export default App;
