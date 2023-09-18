



let increaseEl = document.getElementById("count-el")
let count = 0;
function increase(){
    count++;
    increaseEl.innerText = count;
}

let savedEl = document.getElementById("saved-el")

function save(){
    let previousRoom =" "+ count + " - ";
    savedEl.innerText += previousRoom;
    count = 0;
    increaseEl.innerText = count;
}
//sconsole.log(increaseBtn);


