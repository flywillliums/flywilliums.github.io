function buttonClick(){
    document.getElementById('button').classList.toggle('was-clicked')
}

function headerClick(e){
    e.target.classList.toggle('hovered')
}

function windowLoaded() {
    console.log('loaded!')
    document.getElementById('button').addEventListener('click', buttonClick);
    document.getElementById('h1').addEventListener('mouseover', headerClick);
}

window.onload = windowLoaded;