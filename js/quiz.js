/*When your page first loads, you need to use an XHR to
load the contents of the JSON file, and parse them into a native JavaScript object.
Loop over your array of cars and build up an HTML string to
 build a card for each car. Also, use Bootstrap to create rows.
 Each row should contain 3 columns. Make sure you have a parent
 element with a class of container. Hint: You must build up the
 entire string of columns/rows before injecting into the DOM.
 Use a counter variable to know when to close a row after three columns.*/




function createCard(car, i) {
    // This function will be passed 1 car at a time
    var card = "";

    if(i === 0 || i === 3 || i === 6 || i === 9 || i === 12) {
        card += `<div class="row">`;
        console.log("Opening Div");
    }
    // create the card
    card += `<div class="col-lg-4" id="card_${i}">`;
        card += "<div class='black-border event-listener'>";
            card += `<center><img src="${car.src}" width="80%" height="70%"></center>`; // add img to json file
            card += `<h3><center><span>${car.make}</span></center></h3>`;
            card += `<h3><center><span>${car.model}</span></center></h3>`;
            card += `<h3><center><span>${car.year}</span></center></h3>`;
            card += `<h3><center><span>$${car.price}</span></center></h3>`;
            card += `<p>${car.description}</p>`
        card += `</div>`;
    card += `</div>`;

    if(i == 2 || i === 5 || i === 8 || i === 11) {
        card += `</div>`;
        console.log("closing div");
    }
    // add to the dom
    console.log(card);
    document.getElementById("container").innerHTML += card;

}

function populatePage (inventory) {
    console.log(inventory);
  // Loop over the inventory and populate the page
    document.getElementById("container").innerHTML += "<center><h2>Useds Cars</h2></center>";
    for(var i = 0; i < inventory.cars.length; i++) {
        createCard(inventory.cars[i], i);
    }

  // Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents(); // pass id to this function???
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
console.log(CarLot);
CarLot.loadInventory(populatePage);




