const container = document.querySelector('.grid-container');

const resetButton = document.querySelector('button#reset');

const clearButton = document.querySelector('button#clear');

function createGrid(density) {
    container.style.gridTemplateColumns = `repeat(${density}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${density}, 1fr)`;

    for (i = 0; i < density ** 2; i++) {
        const div = document.createElement('div');
    
        div.classList.add('grid-square');
    
        div.setAttribute('id', i);
    
        div.addEventListener('mouseover', pixelate);
    
        container.appendChild(div);
    }
}

function pixelate(e) {
    e.target.classList.add('pixelated');
}

function resetGrid(newDensity) {
    const gridSquares = Array.from(document.querySelectorAll('.grid-square'));

    gridSquares.forEach(square => {
        square.remove()
    });

    if (newDensity < 10) {
        createGrid(10);
        alert('The minimum density value is 10!');
    } else if (newDensity > 100) {
        createGrid(100);
        alert('The maximum density value is 100!');
    } else {
        createGrid(newDensity);
    }
}

function clearGrid() {
    const gridSquares = Array.from(document.querySelectorAll('.grid-square'));

    gridSquares.forEach(square => {
        square.classList.remove('pixelated');
    });
}

createGrid(16);

resetButton.addEventListener('click', () => { resetGrid(prompt(`Choose the board's density (min. 10 max. 100)`, 16)); });

clearButton.addEventListener('click', clearGrid);