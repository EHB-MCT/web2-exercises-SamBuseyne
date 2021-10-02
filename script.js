//DEEL 3//

'Use strict';

const dishes = [{
    id: 1,
    name: 'Pasta Carbonara',
    price: 12
}, {
    id: 2,
    name: 'Scampies in creamsauce with tagliatteli',
    price: 15

}, {
    id: 3,
    name: 'Sausage with applesauce and potatoes',
    price: 10
}]

window.onload = function () {
    console.log("rock & load");

    document.getElementById('orderForm').addEventListener('submit', (event) => {
        event.preventDefault();

        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("emailInput").value;
        let order = document.querySelector('input[name="dish"]:checked').value;

        let dish = dishes.find(d => d.id == order);

        let orderDetails = {
            name,
            email,
            dish
        }

        printOrder(orderDetails);
    });
}

function printOrder(orderDetails) {
    document.getElementById("messages").innerHTML = `<p>The order for the customer ${orderDetails.name}  is the following:  ${orderDetails.dish.name}. The customer may be notified by email:  ${orderDetails.email}</p>`
}


