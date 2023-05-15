import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Context from "../context/Context";
import DisplayPlayer from "../components/DisplayPlayer";
import Board from "../components/Board";
import PlayerDetails from "../components/PlayerDetails";
import HomeImg from "../assets/Home.png";
import CartoonImg from "../assets/cartoon.png";

const MainGamePage: React.FC = () => {
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [winnerName, setWinnerName] = useState<string>("");

  const navigate = useNavigate();

  //Set player names and if nothing entered carry forwards default value
  const setPlayerName = (p1: string, p2: string): void => {
    setPlayer1(p1 ? p1 : "Player 1");
    setPlayer2(p2 ? p2 : "Player 2");
  };

  //Set the player name who won the game
  const handlePlayerWins = (data: string) => {
    if (data === "x") {
      setWinnerName(player1);
    } else {
      setWinnerName(player2);
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
            <img src={CartoonImg} alt="Cartoon" className="cartoon-img" />
          </Col>
          <Col>
            <Context.Provider value={winnerName}>
              <Container className="main-container">
                <PlayerDetails getPlayerName={setPlayerName} />
                <Row>
                  <Col md={3}>
                    <DisplayPlayer isXTurn={isXTurn} playerName={player1} />
                  </Col>
                  <Col>
                    <Board
                      isXTurn={isXTurn}
                      setIsXTurn={setIsXTurn}
                      playerWins={(data: string) => handlePlayerWins(data)}
                    />
                  </Col>
                  <Col md={3}>
                    <DisplayPlayer isXTurn={!isXTurn} playerName={player2} />
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
