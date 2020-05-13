import React from 'react';

function App() {
  return (
    <div>
      <h1>TITOLOTITOLOTITOLO</h1>
      <p>Il numero che vedete è generato randomicamente.</p>
      <p id="n">0</p>
      <button onClick={function() {document.getElementById("n").innerHTML = Math.floor(Math.random() * 100)}}>Click me!</button>
    </div>
  );
}

export default App;
