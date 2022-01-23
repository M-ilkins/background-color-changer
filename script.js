const button = document.querySelector('button');

function changeColor(target){
    // using the RGB color value system
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let styleString = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = styleString;
    // uncomment (below) to display current color to console!
    // console.log(styleString);
}

button.onclick = changeColor;