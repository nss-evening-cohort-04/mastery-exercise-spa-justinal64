/*When your page first loads, you need to use an XHR to
load the contents of the JSON file, and parse them into a native JavaScript object.
Loop over your array of cars and build up an HTML string to
 build a card for each car. Also, use Bootstrap to create rows.
 Each row should contain 3 columns. Make sure you have a parent
 element with a class of container. Hint: You must build up the
 entire string of columns/rows before injecting into the DOM.
 Use a counter variable to know when to close a row after three columns.*/

var card = "";
var colorArray = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#F0FFFF", "#7FFF00", "#00FFFF"];
function populatePage (inventory) {
    card += "<center><h2>Useds Cars</h2></center>";
    for(var i = 0; i < inventory.cars.length; i++) {
        currentCar = inventory.cars[i]

        // create a new row (every 3rd time through)
        if((i % 3) === 0) {
            card += `<div class="row">`;
        }

        // create the card
        card += `<div class="col-lg-4" id="card_${i}">`;
            card += "<div class='black-border event-listener'>";
                card += `<center><img src="${currentCar.src}" width="80%" height="70%"></center>`; // add img to json file
                card += `<h3><center><span>${currentCar.make}</span></center></h3>`;
                card += `<h3><center><span>${currentCar.model}</span></center></h3>`;
                card += `<h3><center><span>${currentCar.year}</span></center></h3>`;
                card += `<h3><center><span>$${currentCar.price}</span></center></h3>`;
                card += `<center><strong>Description</strong></center>`;
                card += `<p>${currentCar.description}</p>`;
            card += `</div>`;
        card += `</div>`;

        // end the row (every 3rd time through)
        if((i + 1) % 3 === 0 && i !== 0) {
            card += `</div>`;
        }
    }
    // add to the dom
    document.getElementById("container").innerHTML += card;


  // Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
console.log(CarLot);
CarLot.loadInventory(populatePage);




