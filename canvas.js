let windowwidth = 800;
let windowheight = 600
let cellSize = 20;
let grid;

function setup(){
    createCanvas(windowwidth,windowheight);
    let rowCount = Math.floor(windowheight/cellSize)
    let colCount = Math.floor(windowwidth/cellSize)
    for (let row = 0; row < rowCount; row++){
        grid.push([])
        for (let col = 0; col < colCount; col++){
            grid[row].push([])
        }
    }
}
