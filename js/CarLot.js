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
        console.log(inventory);
    }, activateEvents() {
        var classEventListener = document.getElementsByClassName("event-listener");

        for(var i = 0; i < classEventListener.length; i++) {
            classEventListener[i].addEventListener("click", function(event) {
                console.log(event);
                console.log(this);
                this.classList.add("focus-styling");
            })
        }


    }
  };

})();
