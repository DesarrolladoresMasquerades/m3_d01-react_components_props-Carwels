import Navbar from "./components/Navbar/Navbar";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello Ironhackers!
      <Navbar />
      <Greeting message={"Hello React!!"}/>
    </div>
  );
}

export default App;
