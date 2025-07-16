import React, { createContext, useContext, useState } from "react";
import { checkWord } from "../services/api";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [error, setError] = useState(null);

  const startSession = (sessionData) => {
    setSession(sessionData);
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setError(null);
  };

  const submitGuess = async (word) => {
    if (!session) return;

    setError(null);
    try {
      const result = await checkWord(session.sessionId, word);
      const newGuess = { word, result };
      const newGuesses = [...guesses, newGuess];
      setGuesses(newGuesses);

      const hasWon = result.every((l) => l.solution === "correct");
      if (hasWon) {
        setWon(true);
        setGameOver(true);
        return;
      }

      if (newGuesses.length >= 6) {
        setGameOver(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetGame = () => {
    setSession(null);
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setError(null);
  };

  return (
    <GameContext.Provider
      value={{
        session,
        guesses,
        gameOver,
        won,
        error,
        startSession,
        submitGuess,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
