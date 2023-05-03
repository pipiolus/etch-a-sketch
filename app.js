const grid = document.querySelector('#container');
const input = document.getElementById('quantity')
const reset = document.querySelector('.reset')



const createGrid = () => {
   for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
   } 
};

const updateGrid = () => {
    if(input.value > 100) {
        window.alert("THE SIZE MUST BE LESS THAN 100")
        return resetGrid();
    }

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
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
}

const square = document.querySelector('div');
square.addEventListener('mouseover', (e) => {
    e.target.classList.replace('square', 'color');
})

input.addEventListener('change', updateGrid);

reset.addEventListener('click', resetGrid);

createGrid();