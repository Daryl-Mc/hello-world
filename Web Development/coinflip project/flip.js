document.getElementById("ratiob").onclick = click ;
const headsimg = document.getElementById("heads");
const tailsimg = document.getElementById("tails"); 
const result = document.getElementById("result");

function click() { // name the function the same as the declaration to link the button click
    const x = (Math.floor(Math.random()*2)== 0)
    headsimg.style.visibility = "hidden";
    tailsimg.style.visibility = "hidden";
    if (x) {
        flip("Heads");// these become the value for coin referenced in flip function
    }
    else {
        flip("Tails");//value of coin
    }
    imgshow(x)
    
};

function flip(coin) {
    console.log(coin)
    result.innerHTML= ["You got " + coin]
}
function imgshow(x) {
    if (x){
        headsimg.style.visibility = "visible";
    }
    else {
        tailsimg.style.visibility = "visible";
    }
}