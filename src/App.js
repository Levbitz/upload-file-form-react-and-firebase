import "./App.css";
import FileAndText from "./Components/FileAndText/FileAndText";
import FileOnly from "./Components/FileOnly/FileOnly";

//production964@gmail.com account used

function App() {
  return (
    <div className="App">
      <h4>Upload Files To FileBase </h4>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <FileOnly />
          </div>

          <FileAndText />
        </div>
      </div>
    </div>
  );
}

export default App;
