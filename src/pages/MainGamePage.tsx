import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../context/Context";
import DisplayPlayer from "../components/DisplayPlayer";
import Board from "../components/Board";
import PlayerDetails from "../components/PlayerDetails";
import HomeImg from "../assets/Home.png";
import CartoonImg from "../assets/cartoon.png";

interface MainGameState {
  isXTurn: boolean;
  Player1: string;
  Player2: string;
  winnerName: string;
}

const MainGamePage: React.FC = () => {
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [Player1, setPlayer1] = useState<string>("");
  const [Player2, setPlayer2] = useState<string>("");
  const [winnerName, setWinnerName] = useState<string>("");

  const navigate = useNavigate();

  //Set player name with given value if provided or set default value
  const setPlayerName = (p1: string, p2: string) => {
    setPlayer1(p1 ? p1 : "Player 1");
    setPlayer2(p2 ? p2 : "Player 2");
  };

  //Set winner player name who won the game
  const handlePlayerWins = (data: string) => {
    if (data == "x") {
      setWinnerName(Player1);
    } else {
      setWinnerName(Player2);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="menu">
            <button
              className="button"
              id="home-button"
              onClick={() => navigate("/")}
            >
              <img src={HomeImg} alt="Home" style={{ width: "40px" }} />
            </button>
          </div>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col md={5}>
            <img src={CartoonImg} alt="Cartoon" />
          </Col>
          <Col>
            <Context.Provider value={winnerName}>
              <Container className="main-container">
                <PlayerDetails getPlayerName={setPlayerName} />
                <Row>
                  <Col md={3}>
                    <DisplayPlayer isXTurn={isXTurn} playerName={Player1} />
                  </Col>
                  <Col>
                    <Board
                      isXTurn={isXTurn}
                      setIsXTurn={setIsXTurn}
                      playerWins={(data: string) => handlePlayerWins(data)}
                    />
                  </Col>
                  <Col md={3}>
                    <DisplayPlayer isXTurn={!isXTurn} playerName={Player2} />
                  </Col>
                </Row>
              </Container>
            </Context.Provider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainGamePage;
