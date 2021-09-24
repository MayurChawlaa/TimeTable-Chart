import Table from "./Table";

const Addrow = function() {
  console.log("addrow clicked");
  document.getElementById("table").appendChild(document.getElementById("table-row"));
}

function App() {
  
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

export default App;
