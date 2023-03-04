import "./App.css";
import Brush from "./brush.svg";
import Sword from "./sword.svg";

function App() {
  return (
    <div className="container">
      <div className="leftsection"></div>

      <div className="centersection">
        <div className="decoration">
          <div className="outline">
            <div className="canvas">
              <canvas></canvas>
            </div>
          </div>
          <div className="sword">
            <Sword></Sword>
          </div>
          <div className="brush">
            <Brush></Brush>
          </div>
        </div>
      </div>

      <div className="rightsection"></div>
    </div>
  );
}

export default App;
