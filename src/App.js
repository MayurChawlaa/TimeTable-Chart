import Row from "./Row";

const Addrow = function() {
  console.log("addrow clicked");
  document.getElementById("table").appendChild(document.getElementById("table-row"));
}

function App() {
  
  return (
    <div className="App">
      <Row/>
    </div>
  );
}

export default App;
