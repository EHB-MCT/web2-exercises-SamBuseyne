//DEEL 1//

'Use strict';

window.onload = function () {
    console.log("rock & load");
        const form = document.getElementById('orderForm').addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("emailInput").value;
        let order = document.getElementById("orderInput").value;
        document.getElementById("messages").innerHTML = `<p>The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}</p>`
    });
}


