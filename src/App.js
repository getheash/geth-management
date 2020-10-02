import React from "react";
import NavBar from "./component/navbar";
import Title from "./component/title";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Title />
      </main>
    </React.Fragment>
  );
};

export default App;
