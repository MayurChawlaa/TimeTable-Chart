import Row from "./Row";

const Addrow = function() {
  console.log("addrow clicked");
  document.getElementById("table").appendChild(document.getElementById("table-row"));
}

function App() {
  
  return (
    
    <div className="App">
      <Row/>
      <button className="add-row-button" onClick={Addrow}>Add Row</button>
    </div>
  );
}

export default App;
