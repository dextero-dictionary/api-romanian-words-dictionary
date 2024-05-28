document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");

    var buttons = document.getElementsByClassName("openModalLink");

    var span = document.getElementsByClassName("close-button")[0];

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(event) {
            event.preventDefault();
            modal.style.display = "block";
        };
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});