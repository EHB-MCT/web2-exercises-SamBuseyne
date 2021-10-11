//DEEL 4//

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
}, {
    id: 4,
    name: 'Casserole',
    price: 12
}, {
    id: 5,
    name: 'Vegan Burger',
    price: 15
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

        document.getElementById("messages").innerHTML = printOrder(orderDetails);


    });


    document.getElementById("price").addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("test price");
        calculatePrice();
    })

}





function printOrder(orderDetails) {
    return `<p>The order for the customer ${orderDetails.name}  is the following:  ${orderDetails.dish.name}. The customer may be notified by email:  ${orderDetails.email}</p>`
}

function calculatePrice() {
    console.log('Katching!');

    totalPrice = 0;
    let check = document.getElementsByName('dish');
    let dishesSelected = [];

    check.forEach(e => {
        if(e.checked){
            console.log(e);
            dishesSelected.push(e.value);
        }
    })

    console.log(dishesSelected);
    let showPrice = `<p>${dishesSelected}</p>`;
    document.getElementById('price').innerHTML = showPrice;
}