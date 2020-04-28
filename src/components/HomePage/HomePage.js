import React from "react";
import TugOfWarForm from "../TugOfWarForm/TugOfWarForm";
import "./HomePage.scss";
import HowToPlay from "../HowToPlay/HowToPlay";
import Footer from "../Footer/Footer";

const HomePage = () => {
  console.log(process.env.CLIENT_ID);
  return (
    <div className="HomePage">
      <HowToPlay />
      <TugOfWarForm />
      <Footer />
    </div>
  );
};

export default HomePage;
