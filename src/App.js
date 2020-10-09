import React from "react";
import NavBar from "./component/navbar";
import Title from "./component/title";
import Features from "./component/features";
import Subscription from "./component/subscription";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Title />
        <Features />
        <Subscription />
      </main>
    </React.Fragment>
  );
};

export default App;
