// Crear el HTML del popup dinámicamente
const createPopupHTML = () => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          width: 400px;
          height: 500px;
          margin: 0;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          overflow: hidden;
        }
        
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 5px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .subtitle {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .game-container {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 15px;
          backdrop-filter: blur(10px);
        }
        
        .score-board {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-weight: bold;
        }
        
        .game-board {
          width: 300px;
          height: 300px;
          margin: 0 auto;
          background: rgba(0,0,0,0.3);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        
        .snake-segment {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 3px;
          transition: all 0.1s ease;
        }
        
        .snake-head {
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
        }
        
        .snake-body {
          background: #22c55e;
        }
        
        .food {
          position: absolute;
          width: 15px;
          height: 15px;
          background: #ef4444;
          border-radius: 50%;
          animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .game-over {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          background: rgba(0,0,0,0.8);
          padding: 20px;
          border-radius: 10px;
          display: none;
        }
        
        .restart-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 10px;
        }
        
        .restart-btn:hover {
          background: #2563eb;
        }
        
        .controls {
          text-align: center;
          margin-top: 15px;
          font-size: 12px;
          opacity: 0.8;
        }
        
        .paused {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.8);
          padding: 10px 20px;
          border-radius: 5px;
          display: none;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="title">🐍 Snake Game</div>
        <div class="subtitle">¡Diversión en tu extensión!</div>
      </div>
      
      <div class="game-container">
        <div class="score-board">
          <span>Puntuación: <span id="score">0</span></span>
          <span>Velocidad: <span id="speed">1</span></span>
        </div>
        
        <div class="game-board" id="gameBoard">
          <div class="game-over" id="gameOver">
            <div style="font-size: 18px; margin-bottom: 10px;">🎮 ¡Game Over!</div>
            <div>Puntuación final: <span id="finalScore">0</span></div>
            <button class="restart-btn" onclick="restartGame()">Jugar de nuevo</button>
          </div>
          <div class="paused" id="paused">⏸️ PAUSADO</div>
        </div>
        
        <div class="controls">
          <div>🎮 Usa las flechas para mover</div>
          <div>⏸️ Espacio para pausar</div>
          <div>🍎 Come la comida roja para crecer</div>
        </div>
      </div>
    </body>
    </html>
  `;

  return html;
};

// Lógica del juego
class SnakeGame {
  private snake: Array<{ x: number, y: number }> = [{ x: 10, y: 10 }];
  private food: { x: number, y: number } = { x: 15, y: 15 };
  private direction: string = 'right';
  private gameOver: boolean = false;
  private score: number = 0;
  private isPaused: boolean = false;
  private gameSpeed: number = 150;
  private gameInterval: number | null = null;

  private readonly gridSize = 20;
  private readonly boardSize = 300;
  private readonly cellSize = this.boardSize / this.gridSize;

  constructor() {
    this.init();
  }

  private init() {
    this.setupEventListeners();
    this.startGame();
  }

  private setupEventListeners() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (this.direction !== 'down') this.direction = 'up';
          break;
        case 'ArrowDown':
          if (this.direction !== 'up') this.direction = 'down';
          break;
        case 'ArrowLeft':
          if (this.direction !== 'right') this.direction = 'left';
          break;
        case 'ArrowRight':
          if (this.direction !== 'left') this.direction = 'right';
          break;
        case ' ':
          this.togglePause();
          break;
      }
    });
  }

  private startGame() {
    this.gameInterval = window.setInterval(() => {
      this.moveSnake();
    }, this.gameSpeed);
  }

  private moveSnake() {
    if (this.gameOver || this.isPaused) return;

    const head = { ...this.snake[0] };

    switch (this.direction) {
      case 'up':
        head.y = (head.y - 1 + this.gridSize) % this.gridSize;
        break;
      case 'down':
        head.y = (head.y + 1) % this.gridSize;
        break;
      case 'left':
        head.x = (head.x - 1 + this.gridSize) % this.gridSize;
        break;
      case 'right':
        head.x = (head.x + 1) % this.gridSize;
        break;
    }

    // Verificar colisión con el cuerpo
    if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      this.endGame();
      return;
    }

    this.snake.unshift(head);

    // Verificar si come la comida
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10;
      this.generateFood();
      this.updateScore();
      this.increaseSpeed();
    } else {
      this.snake.pop();
    }

    this.render();
  }

  private generateFood() {
    do {
      this.food = {
        x: Math.floor(Math.random() * this.gridSize),
        y: Math.floor(Math.random() * this.gridSize)
      };
    } while (this.snake.some(segment => segment.x === this.food.x && segment.y === this.food.y));
  }

  private render() {
    const gameBoard = document.getElementById('gameBoard');
    if (!gameBoard) return;

    // Limpiar elementos del juego
    const existingSegments = gameBoard.querySelectorAll('.snake-segment, .food');
    existingSegments.forEach(el => el.remove());

    // Renderizar serpiente
    this.snake.forEach((segment, index) => {
      const element = document.createElement('div');
      element.className = `snake-segment ${index === 0 ? 'snake-head' : 'snake-body'}`;
      element.style.left = `${segment.x * this.cellSize}px`;
      element.style.top = `${segment.y * this.cellSize}px`;
      gameBoard.appendChild(element);
    });

    // Renderizar comida
    const foodElement = document.createElement('div');
    foodElement.className = 'food';
    foodElement.style.left = `${this.food.x * this.cellSize}px`;
    foodElement.style.top = `${this.food.y * this.cellSize}px`;
    gameBoard.appendChild(foodElement);
  }

  private updateScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = this.score.toString();
    }
  }

  private increaseSpeed() {
    if (this.score > 0 && this.score % 50 === 0) {
      this.gameSpeed = Math.max(50, this.gameSpeed - 10);
      if (this.gameInterval) {
        clearInterval(this.gameInterval);
        this.gameInterval = window.setInterval(() => {
          this.moveSnake();
        }, this.gameSpeed);
      }

      const speedElement = document.getElementById('speed');
      if (speedElement) {
        speedElement.textContent = Math.round((150 - this.gameSpeed) / 10 + 1).toString();
      }
    }
  }

  private togglePause() {
    this.isPaused = !this.isPaused;
    const pausedElement = document.getElementById('paused');
    if (pausedElement) {
      pausedElement.style.display = this.isPaused ? 'block' : 'none';
    }
  }

  private endGame() {
    this.gameOver = true;
    const gameOverElement = document.getElementById('gameOver');
    const finalScoreElement = document.getElementById('finalScore');

    if (gameOverElement) {
      gameOverElement.style.display = 'block';
    }

    if (finalScoreElement) {
      finalScoreElement.textContent = this.score.toString();
    }
  }

  public restart() {
    this.snake = [{ x: 10, y: 10 }];
    this.food = { x: 15, y: 15 };
    this.direction = 'right';
    this.gameOver = false;
    this.score = 0;
    this.isPaused = false;
    this.gameSpeed = 150;

    this.generateFood();
    this.updateScore();

    const gameOverElement = document.getElementById('gameOver');
    const pausedElement = document.getElementById('paused');
    const speedElement = document.getElementById('speed');

    if (gameOverElement) gameOverElement.style.display = 'none';
    if (pausedElement) pausedElement.style.display = 'none';
    if (speedElement) speedElement.textContent = '1';

    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    }

    this.startGame();
    this.render();
  }
}

// Función global para reiniciar el juego
(window as any).restartGame = () => {
  if ((window as any).snakeGame) {
    (window as any).snakeGame.restart();
  }
};

// Inicializar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  (window as any).snakeGame = new SnakeGame();
});

// Exportar el HTML para que esbuild lo procese
export const popupHTML = createPopupHTML();
