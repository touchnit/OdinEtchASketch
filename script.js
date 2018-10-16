const gridLayer = document.querySelector('#container');
let grid = [];


function clearGrid(){
   let gridLength = grid.length;
    for (let i=0; i< gridLength; i++){
        grid[i].classList.remove('gridHovered');
    }
}
// Delete grid function
function deleteGrid(){
        while (gridLayer.firstChild) {
        container.removeChild(gridLayer.firstChild)};
        grid.length = 0;
}

function askPlayer(){
    let playerSquare;
    deleteGrid();
    do {
    playerSquare = prompt("How many squares per side would you like to have ? ");
    }
    while(playerSquare > 64);
    gridArray(Number(playerSquare));
    
}

function gridArray(gridsize){

let gridSizeLength = Number(gridsize),
    gridTotal = gridSizeLength * gridSizeLength,
    gridWidthCalc = 0;
    
    gridWidthCalc = ( 100 / gridSizeLength );

    document.documentElement.style.setProperty(`--grid-width`, gridWidthCalc + "%");
    
for ( let i=0; i < gridTotal ; i++ )
    {
        grid[i] = document.createElement('div');
        grid[i].classList.add('gridDiv');
        gridLayer.appendChild(grid[i]);
        grid[i].addEventListener('mouseover', function (){
        grid[i].classList.add('gridHovered');
        });
    };
    console.log(grid);
}

gridArray(16);

