# unq-ui-ian-bravo-trabajo-final

# Trabajo Final Integrador - Interfaces de Usuario (1°C 2025)

**Alumno:** Ian Bravo  
**Repositorio:** [https://github.com/ianbravo/unq-ui-ian-bravo-trabajo-final](https://github.com/ianbravo/unq-ui-ian-bravo-trabajo-final)

## Enunciado
Este trabajo consiste en el desarrollo de un juego estilo Wordle (llamado Wordly), utilizando React, siguiendo las reglas, requisitos funcionales y no funcionales establecidos por la cátedra.

## Reglas del Juego
- Debés adivinar una palabra en español de X letras.
- Tenés **6 intentos** para acertarla.
- Cada letra se evalúa y se marca con colores:
  - 🟩  Letra en la posición correcta (`correct`).
  - 🟨  Letra en la palabra pero en otra posición (`elsewhere`).
  - ⬜  Letra no está en la palabra (`absent`).

### Ejemplo
Palabra objetivo: **JUGAR**

| Intento | Resultado                  |
|---------|----------------------------|
| FLETE   | ⬜ ⬜ ⬜ ⬜ ⬜----------|
| RATON   | 🟨 ⬜ ⬜ ⬜ ⬜----------|
| LUGAR   | ⬜ 🟩 🟩 🟩 🟩----------|
| JUGAR   | 🟩 🟩 🟩 🟩 🟩 (ganaste)|       

## Tecnologías utilizadas
- React (CRA)
- Hooks personalizados y React Context para gestión del estado
- CSS puro con estilos modernos y responsivos


### Clonar el repositorio
git clone https://github.com/ianbravo/unq-ui-ian-bravo-trabajo-final.git
