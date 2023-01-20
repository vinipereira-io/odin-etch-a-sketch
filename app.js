const container = document.querySelector('.grid-container');

for (i=32; i>0; i--) {
    const div = document.createElement('div');

    div.classList.add('grid-square');

    div.setAttribute('id', i);

    container.appendChild(div);
}