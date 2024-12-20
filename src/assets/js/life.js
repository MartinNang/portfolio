const startGameOfLife = function () {

document.addEventListener('DOMContentLoaded', function () {
    // Initialize canvas and context
    let canvas = document.getElementById('game-canvas');
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    canvas.style.backgroundColor = "#020202"
    const ctx = canvas.getContext('2d');

    // Define cell size and grid dimensions
    const cellSize = 10;
    const numRows = Math.floor(canvas.height / cellSize);
    const numCols = Math.floor(canvas.width / cellSize);

    // Function to initialize the grid
    function createGrid() {
        const grid = [];
        for (let i = 0; i < numRows; i++) {
            grid[i] = [];
            for (let j = 0; j < numCols; j++) {
                grid[i][j] = Math.
                random() > 0.5 ? 1 : 0; // Random initialization
            }
        }
        return grid;
    }

    let grid = createGrid();
    let isRunning = false;
    let animationId = null;

    // Function to draw the grid
    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                if (grid[i][j] === 1) {
                    ctx.fillStyle = '#17a589';
                    ctx.shadowBlur = 50;
                    ctx.shadowColor = " #295b4e";
                    ctx.fillRect(j * cellSize, i *
                                 cellSize, cellSize, cellSize);
                }
            }
        }
        // ctx.filter = 'blur(10px)';
    }

    // Function to update the grid based on Conway's rules
    function updateGrid() {
        const newGrid = [];
        for (let i = 0; i < numRows; i++) {
            newGrid[i] = [];
            for (let j = 0; j < numCols; j++) {
                const neighbors = countNeighbors(i, j);
                // if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
                //     newGrid[i][j] = 0; 
                // } else if (grid[i][j] === 0 && neighbors === 3) {
                //     newGrid[i][j] = 1; 
                // } else {
                //     newGrid[i][j] = grid[i][j]; 
                // }
                // rule B36/S23
                if (grid[i][j] === 1 && !((neighbors === 2) || (neighbors === 3))) {
                    newGrid[i][j] = 0; // cell is dead
                } else if (grid[i][j] === 0 && (neighbors === 3 || neighbors === 6)) {
                    newGrid[i][j] = 1; // cell is born
                } else {
                    newGrid[i][j] = grid[i][j]; // cell has survived
                }
            }
        }
        grid = newGrid;
    }

    // Function to count live neighbors of a cell
    function countNeighbors(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const r = row + i;
                const c = col + j;
                if (r >= 0 && r < numRows && c >= 0 &&
                    c < numCols && !(i === 0 && j === 0)) {
                    count += grid[r][c];
                }
            }
        }
        return count;
    }

    // Main loop to update and draw the grid
    function mainLoop() {
        updateGrid();
        drawGrid();
        if (isRunning) {

            setTimeout( () => {
                animationId = requestAnimationFrame(mainLoop);

            }, 50) // The delay will make the game easier to follow
        }
    }

    if (!isRunning) {
        isRunning = true;
        mainLoop();
    }
});
}

export default startGameOfLife;