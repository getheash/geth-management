import React from "react";
import NavBar from "./component/navbar";
import Title from "./component/title";
import Features from "./component/features";
import Subscription from "./component/subscription";
import SubmitLinks from "./component/submitLinks";
import Contact from "./component/contact";
import FooterCopyright from "./component/footerCopyright";
import Testimonies from "./component/testimonies";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Title />
        <Features />
        <Subscription />
        <SubmitLinks />
        <Testimonies />
        <Contact />
      </main>
      <footer>
        <FooterCopyright />
      </footer>
    </React.Fragment>
  );
};

export default App;
