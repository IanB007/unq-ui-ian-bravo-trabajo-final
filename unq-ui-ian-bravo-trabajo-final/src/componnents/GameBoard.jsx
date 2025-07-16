import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import "../App.css";

const MAX_ATTEMPTS = 6;

const GameBoard = () => {
  const { session, guesses, submitGuess, error } = useGame();
  const [currentWord, setCurrentWord] = useState("");
  const wordLength = session.wordLenght;

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    if (val.length <= wordLength && /^[a-zñáéíóú]*$/.test(val)) {
      setCurrentWord(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentWord.length !== wordLength) {
      alert(`La palabra debe tener ${wordLength} letras.`);
      return;
    }
    submitGuess(currentWord);
    setCurrentWord("");
  };

  const getColor = (status) => {
    if (status === "correct") return "#4caf50"; // verde
    if (status === "elsewhere") return "#ffb300"; // amarillo
    return "#9e9e9e"; // gris
  };

  return (
    <div>
      <h2>Intentos: {guesses.length} / {MAX_ATTEMPTS}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentWord}
          onChange={handleChange}
          maxLength={wordLength}
          autoFocus
        />
        <button type="submit" disabled={guesses.length >= MAX_ATTEMPTS}>
          Probar
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "20px" }}>
        {guesses.map(({ word, result }, idx) => (
          <div key={idx} style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            {result.map(({ letter, solution }, i) => (
            <div key={i} className={`guess-letter ${solution}`}>
                {letter.toUpperCase()}
            </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;