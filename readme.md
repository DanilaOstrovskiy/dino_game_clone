# Dino Run Game

This is a simple browser-based Dino Run game implemented in JavaScript and HTML/CSS. The game allows the player to control a dinosaur character and avoid obstacles (cacti) to achieve the highest possible score.

## Getting Started

To run the game locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
Open the project folder in your code editor.

Open index.html in your web browser to play the game.

## How to Play
When you open the game, you'll see a start screen with the message "Press any key to Start."

Press any key to start the game.
The game screen will appear, and you'll control a dinosaur character.
Use the spacebar key to make the dinosaur jump over obstacles (cacti).
The game keeps track of your score, which increases as you survive longer.
If the dinosaur collides with an obstacle, the game ends, and a "Game over" screen appears with your final score.
Press any key to restart the game.
Code Structure
The game code is organized into three main modules: ground.js, dino.js, and cactus.js, each responsible for different aspects of the game.

The game world has a fixed width and height (WORLD_WIDTH and WORLD_HEIGHT) and adjusts to the screen size.

The game loop is handled by the update function, which updates the game elements, checks for collisions, and updates the score.


## Acknowledgments
This game is inspired by the classic Chrome Dino Run game.
