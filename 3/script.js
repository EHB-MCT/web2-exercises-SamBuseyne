"Use strict";

let magicNumber = 0;

window.onload = function () {
    generateNumber();


    document.getElementById("guess-button")
    .addEventListener("click", function(event){
        let message = "";
        compareNumber(document.getElementById('input').value.then(
            result => {document.getElementById('messages').innerText = result},
            error => {document.getElementById('messages').innerText = error}
        ))
    })
}


function compareNumber(nr) {
    return new Promise(function (resolve, reject) {
        //compare nr with magicnumber

        //if we geussed it right
        resolve('You have guessed it! Good for you!');
    })
}

function generateNumber() {
    magicNumber = Math.floor(Math.random() * 21);
    return
}

function addMessage(m, type){
}