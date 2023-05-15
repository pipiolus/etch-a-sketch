const grid = document.querySelector('#container');
const input = document.getElementById('quantity');
const reset = document.querySelector('.reset');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const dark = document.querySelector('.dark');



const createGrid = () => {
   for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
   } 
};

const updateGrid = () => {


    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${input.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${input.value}, 2fr)`
    );
    for (let i = 0; i < input.value * input.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
};

const resetGrid = () => {
    grid.innerHTML = "";
    input.value = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(16, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(16, 2fr)`
    );
    square.addEventListener('mouseover', (e) => e.target.style.backgroundColor = '#232326');
    createGrid();
}

function generateColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }


   function setColor(e){
    e.target.style.backgroundColor = '#232326';
   }
   
   const square = document.querySelector('div');
   square.addEventListener('mouseover', (e) => {
       e.target.classList.replace('square', 'color');
    })
    

    dark.addEventListener('click', () => {
        square.addEventListener('mouseover', (e) => e.target.style.backgroundColor = '#232326');
    })
    
    rainbow.addEventListener('click', () => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = generateColor();
        })
    })

    eraser.addEventListener('click', () => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'white';
        })
    })

input.addEventListener('change', updateGrid);

reset.addEventListener('click', resetGrid);

createGrid();