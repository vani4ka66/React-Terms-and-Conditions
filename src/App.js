import "./App.css";
import Document from "./Document";
import React, {useEffect, useState} from "react";

function App() {

  const [value, setValue] = useState('')

  useEffect(() => {
 
       const a =  fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
        .then(respone => respone.text())
        .then(data => {

          setValue(data)

        });

        return () => {
          clearInterval(a)
        }

  },[]);

  return (
    <div className="App">
      <Document title="Terms and Conditions" content={value} />

      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
