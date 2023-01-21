const container = document.querySelector('.grid-container');

function createGrid(scale) {
    container.style.gridTemplateColumns = `repeat(${scale}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${scale}, 1fr)`;

    for (i = 0; i < scale ** 2; i++) {
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

createGrid(100);