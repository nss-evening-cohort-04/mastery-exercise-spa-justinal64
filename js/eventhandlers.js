var CarLot = (function(newCarLot) {

    newCarLot.activateEvents = function() {
        var classEventListener = document.getElementsByClassName("event-listener");
        var searchInput = $('#search');
        var color;
        var bioHtml;
        for(var i = 0; i < classEventListener.length; i++) {
            classEventListener[i].addEventListener("click", function(event) {
                // get random color from array
                color = colorArray[Math.floor(Math.random() * 5) + 0];

                if(this.classList.contains("focus-styling")) {
                    newCarLot.resetCard("white", this);
                } else {
                    newCarLot.styleCard(color, this);
                }
                // used when you edit the value in the input field
                currentBio = this;
                searchInput.val(this.lastChild.innerHTML);
                searchInput.focus();
            })
        }
    }
    return newCarLot;
})(CarLot || {});