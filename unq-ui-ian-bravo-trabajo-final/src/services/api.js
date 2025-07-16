const BASE_URL = 'https://word-api-hmlg.vercel.app/api';

export const getDifficulties = async () => {
  const res = await fetch(`${BASE_URL}/difficulties`);
  if (!res.ok) throw new Error("Error al obtener dificultades");
  return res.json();
};

export const startSession = async (difficultyId) => {
  const res = await fetch(`${BASE_URL}/difficulties/${difficultyId}`);
  if (!res.ok) throw new Error("Error al iniciar sesión");
  return res.json();
};

export const checkWord = async (sessionId, word) => {
  const res = await fetch(`${BASE_URL}/checkWord`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, word })
  });

  if (res.status === 400) throw new Error("Palabra inválida");
  if (res.status === 404) throw new Error("Sesión no encontrada");
  return res.json();
};
