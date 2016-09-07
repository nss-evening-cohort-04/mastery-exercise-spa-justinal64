/*When your page first loads, you need to use an XHR to
load the contents of the JSON file, and parse them into a native JavaScript object.
Loop over your array of cars and build up an HTML string to
 build a card for each car. Also, use Bootstrap to create rows.
 Each row should contain 3 columns. Make sure you have a parent
 element with a class of container. Hint: You must build up the
 entire string of columns/rows before injecting into the DOM.
 Use a counter variable to know when to close a row after three columns.*/

 function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();