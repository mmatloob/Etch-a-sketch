/* 
1. create a 16 x 16 grid 
    use for loop
        for i < 16 make grid in x dir
            sub for loop 


*/

let btn = document.querySelector('#button');
btn.addEventListener("click", function () {
    getGrid();
});

const gridContainer = document.querySelector('#grid_1');
gridContainer.setAttribute('style', 'background-color: rgb(0,0,255,0.2)','align-items: center'); 
gridContainer.style.display ='grid';
let wid = 16;
gridContainer.style.gridTemplateColumns = 'repeat('+ wid + ', auto)';

function getGrid(){
    wid = prompt('Input the size of grid');
}


for (i = 0; i < wid*wid; i++) {
    let rowGrid = document.createElement('div');
    rowGrid.id = 'row' + i;
    rowGrid.setAttribute('style', 'text-align: center');
    gridContainer.appendChild(rowGrid); 
}

for (i=0; i < wid*wid; i++) {
    let hoverEvent;
    hoverEvent = document.querySelector('#row'+i);
    hoverEvent.addEventListener('mouseenter',() => {
        hoverEvent.setAttribute('style', 'background-color: red');
    })
}






