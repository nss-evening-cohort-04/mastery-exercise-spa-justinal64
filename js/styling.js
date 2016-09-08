var CarLot = (function(newCarLot) {

    newCarLot.resetCard = function(color, x) {
        x.style.backgroundColor = color;
        x.classList.remove("focus-styling");
    },
    newCarLot.styleCard = function(color, x) {
        // returns a random color each time it is clicked
        x.style.backgroundColor = color;
        x.classList.add("focus-styling");
    }

    return newCarLot;
})(CarLot || {});