document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");

    var buttons = document.getElementsByClassName("openModalLink");

    var span = document.getElementsByClassName("close-button")[0];

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function (event) {
            event.preventDefault();
            modal.style.display = "block";
        };
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// sessionId
function generateUniqueId() {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function () {
        return (Math.random() * 16 | 0).toString(16);
    });
}

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const userIdCookieName = "userIdentifier";
let userId = getCookie(userIdCookieName);

if (!userId) {
    userId = generateUniqueId();
    setCookie(userIdCookieName, userId, 3650); // Cookie expires in 10 year
}

fetch('https://api.dextero.site/api/v1/dextero/track/' + userId, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });