
const cart = document.querySelectorAll(".text-profile")


function loadProfiles() {
    const request = new XMLHttpRequest();

    request.open("get", "data/profile.json");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText)
            insertProfiles(json);
        } catch (e) {
            console.warn("Could not load profiles")
        }
    };
    request.send();
}


function insertProfiles(json) {

    // adds content for every profile (for now repeating)
    for (i = 0; i < cart.length; i++) {
        var h1String = "";
        var pString = "";
        for (let i = 0; i < json.length; i++) {
            h1String += '<h1 class="name">' + json[i].name + '</h1>'
            pString += '<p class="desc">' + json[i].desc + '</p>'
        }
    
        console.log(cart[i])
        cart[i].insertAdjacentHTML('beforeend', h1String)
        cart[i].insertAdjacentHTML('beforeend', pString)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadProfiles();
});