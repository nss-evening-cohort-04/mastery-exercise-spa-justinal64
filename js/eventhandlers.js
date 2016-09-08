var CarLot = (function(newCarLot) {
var counter = 0;
    newCarLot.activateEvents = function() {
        var classEventListener = document.getElementsByClassName("event-listener");

        for(var i = 0; i < classEventListener.length; i++) {
            classEventListener[i].addEventListener("click", function(event) {
                var color = colorArray[Math.floor(Math.random() * 5) + 0];
                newCarLot.styleCard(color, this);
            })
        }
    }
    return newCarLot;
})(CarLot || {});