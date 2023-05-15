import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainGamePage from "./pages/MainGamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main-game" element={<MainGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
