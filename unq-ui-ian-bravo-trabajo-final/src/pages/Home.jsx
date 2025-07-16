import React, { useEffect, useState } from "react";
import { getDifficulties } from "../services/api";
import { useGame } from "../context/GameContext";

const Home = () => {
  const [difficulties, setDifficulties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { startSession } = useGame();

  useEffect(() => {
    getDifficulties()
      .then(setDifficulties)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando dificultades...</p>;

  return (
    <div>
      <h1>Wordle</h1>
      <h2>Seleccioná una dificultad:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {difficulties.map((diff) => (
          <li key={diff.id} style={{ marginBottom: 10 }}>
            <button onClick={async () => {
              try {
                const sessionData = await fetch(`https://word-api-hmlg.vercel.app/api/difficulties/${diff.id}`).then(res => {
                  if (!res.ok) throw new Error("No se pudo iniciar sesión");
                  return res.json();
                });
                startSession(sessionData);
              } catch {
                alert("Error al iniciar sesión con esta dificultad");
              }
            }}>
              {diff.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
