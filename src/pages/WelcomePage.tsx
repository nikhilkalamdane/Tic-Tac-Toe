import React from "react";
import Logo from "../assets/welcome.png";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-page">
      <div className="welcome-title">
        <h1 className="title">Click here for fun !!!</h1>
        <button className="button" onClick={() => navigate("/main-game")}>
          Start
        </button>
      </div>

      <img src={Logo} alt="WelcomeLogo" style={{ width: "400px" }} />
    </div>
  );
};

export default WelcomePage;
