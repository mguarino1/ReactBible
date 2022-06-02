import { useEffect } from "react";
//import logo from './logo.svg'
import "./App.css";

function App() {
  useEffect(() => {
    fetch("172.0.0.1:8000/")
      .then((data) => {
        console.log(data.body);
      })
      .catch((e) => {
        console.log("error" + e);
      });
  }, []);

  return (
    <div className="App">
      <div className="verseContainer"></div>
      <div className="rightAside">
        <div className="inputContainer">
          <input type="text" className="inputs" />
          <input type="text" className="inputs" />
          <input type="text" className="inputs" />
        </div>
      </div>
    </div>
  );
}

export default App;
