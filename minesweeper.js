document.addEventListener('DOMContentLoaded', () => {
    //populates grid with "tiles", 10x10 size
    function createGrid() {
        const tileContainer = document.querySelector('.tile-container');
        console.log(tileContainer)
        let squareArray = [];

        for (let i = 0; i < 100; i++) {
            const tile = document.createElement('div')
            tile.setAttribute('id', i)
            tileContainer.appendChild(tile)
            squareArray.push(tile)
        }

    }
    createGrid();
});


