import React from "react";
import GlosarioItem from "./Components/GlosarioItem/GlosarioItem";
import Data from "./Data"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {
            Data.map((item) => (
              <GlosarioItem data={item} key={item.id} />
            )
            )}
          </div>
      </div>
    </div>
  );
}

export default App;
