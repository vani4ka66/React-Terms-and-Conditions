import "./App.css";
import Document from "./Document";
import React, {useEffect, useState} from "react";

function App() {

  const [value, setValue] = useState('')

  useEffect(() => {
 
      fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
        .then(response => response.text())
        .then(data => {

          setValue(data)

        });

  },[]);

  return (
    <div className="App">
      <Document title="Terms and Conditions" content={value} />
    </div>
  );
}

export default App;
