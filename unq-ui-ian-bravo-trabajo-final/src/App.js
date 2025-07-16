import Home from "./pages/home";
import GameBoard from "./componnents/GameBoard";
import { GameProvider, useGame } from "./context/GameContext";

function MainApp() {
  const { session, gameOver, won, resetGame } = useGame();

  if (!session) {
    return <Home />;
  }

  if (gameOver) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{won ? "¡Ganaste! 🎉" : "Juego terminado, perdiste 😞"}</h1>
        <button onClick={resetGame}>Jugar de nuevo</button>
      </div>
    );
  }

  return <GameBoard />;
}

function App() {
  return (
    <GameProvider>
      <MainApp />
    </GameProvider>
  );
}

export default App;
