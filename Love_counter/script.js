
// https://api.countapi.xyz/create?namespace=filipteczalove&key=flyingbisons&value=0


// Updating the value of love
function updateLoveCount() {
	fetch('https://api.countapi.xyz/info/filipteczalove/flyingbisons')
	.then(res => res.json())
	.then(res => {
		$("#count").text(res.value);
	})
}

// Adds 1 love after click
$("#heart").click(function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/filipteczalove/flyingbisons");
    xhr.responseType = "json";
    xhr.onload = function() {
        // console.log(`Clicked: ${this.response.value} times!`);
        $("#count").text(this.response.value);
    }
    xhr.send();
});

updateLoveCount();
