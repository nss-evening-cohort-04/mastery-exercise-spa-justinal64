var CarLot = (function(newCarLot) {

    newCarLot.activateEvents = function() {
        var classEventListener = document.getElementsByClassName("event-listener");
        var color;
        var bioHtml;
        var searchInput = $('#search');
        for(var i = 0; i < classEventListener.length; i++) {
            classEventListener[i].addEventListener("click", function(event) {
                // get random color from array
                color = colorArray[Math.floor(Math.random() * 5) + 0];

                if(this.classList.contains("focus-styling")) {
                    newCarLot.resetCard("white", this);
                    searchInput.val("");
                } else {
                    newCarLot.styleCard(color, this);
                    searchInput.val(this.lastChild.innerHTML);
                    searchInput.focus();
                }
                // used when you edit the value in the input field
                currentBio = this;
            })
        }
    }
    return newCarLot;
})(CarLot || {});