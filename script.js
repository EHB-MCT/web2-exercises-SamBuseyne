//DEEL 2//


'Use strict';

window.onload = function () {
    console.log("rock & load");

    document.getElementById('orderForm').addEventListener('submit', (event) => {
        event.preventDefault();

        let name = document.getElementById("nameInput").value
        let email = document.getElementById("emailInput").value;
        let order = document.getElementById("orderInput").value;

        let orderDetails = {
            name,email,order
        }

        printOrder(orderDetails);
    });
}

function printOrder(orderDetails) {
    document.getElementById("messages").innerHTML = `<p>The order for the customer ${orderDetails.name}  is the following:  ${orderDetails.order}. The customer may be notified by email:  ${orderDetails.email}</p>`
}

