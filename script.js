const gridLayer = document.querySelector('#container');
const grid = [];

function gridArray (){
    
for (let i=1; i< 17; i++ )
    {
        grid[i] = document.createElement('div');
        grid[i].classList.add('gridDiv') ;
        grid[i].innerHTML = [i];
        gridLayer.appendChild(grid[i]);
    };}

gridArray();