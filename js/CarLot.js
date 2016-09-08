var CarLot = (function () {
  var inventory = [];

return {
        loadInventory: function (callback) {
            var loader = new XMLHttpRequest();
            // loader.addEventListener("load", onLoad);
            loader.addEventListener("error", function() {
                console.log("There was an error!");
            });
            loader.open("GET", "json/inventory.json")
            loader.send();
            loader.addEventListener("load", function () {
            // Set the value of the private array
            inventory = JSON.parse(this.responseText);
            // Invoke the callback function
            callback(inventory); // callback = populatePage
            });
            }, getInventory: function() {
                return inventory;
            }
        };

})();
