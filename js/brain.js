/* 
1. create a 16 x 16 grid 
    use for loop
        for i < 16 make grid in x dir
            sub for loop 


*/

const gridContainer = document.querySelector('#grid_1');
gridContainer.setAttribute('style', 'background-color: rgb(0,0,255,0.2)','align-items: center');
gridContainer.style.display ='grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, auto)'

for (i = 0; i < 256; i++) {
    let rowGrid = document.createElement('div');
    rowGrid.textContent = 'r' + i;
    rowGrid.id = 'row' + i;
    rowGrid.setAttribute('style', 'border: solid red 1px;', 'text-align: center');
    gridContainer.appendChild(rowGrid);   
}



