# Tic-Tac-Toe

A simple two-player Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play in a web browser—no dependencies or build tools required.

## Features

- Play locally with two players, taking turns as **O** and **X**.
- Detects a winner when a player completes a row, column, or diagonal.
- Use **Reset Button** or **New Game** to clear the board and start again.
- Responsive board styling using CSS viewport units.

## Getting started

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Click an empty square to make a move.

Player **O** goes first. After a move, the other player takes their turn. When a player wins, the game displays a winner message and disables the board. Use either reset control to play again.

## Project files

| File | Description |
| --- | --- |
| `index.html` | Game page and board markup |
| `style.css` | Layout and visual styles |
| `script.js` | Turn handling, win checks, and game controls |

## Known issue

Draw detection is currently incomplete: when the board fills without a winner, the game script calls `ischeckwinner()`, which is not defined. As a result, the draw message may not appear and the browser console will report an error.

## License

This project is available under the MIT License. See [LICENSE](./LICENSE) for details.
