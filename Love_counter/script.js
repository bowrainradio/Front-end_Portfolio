
// https://api.api-ninjas.com/v1/counter?id=filipteczalove&value=0


//Updating the value of love
function updateLoveCount() {
	fetch('https://api.api-ninjas.com/v1/counter?id=filipteczalove', {
    headers: {
        'X-Api-Key': 'WRz4TD0hfcCeh6F+v6c/oQ==NkyT3Iw1mBmVF84e',
    },
    })
	.then(res => res.json())
	.then(res => {
        console.log(res.value)
		$("#count").text(res.value);
	})
}

// Adds 1 love after click
$("#heart").click(function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.api-ninjas.com/v1/counter?id=filipteczalove&hit=true");
    xhr.setRequestHeader("X-Api-Key", "WRz4TD0hfcCeh6F+v6c/oQ==NkyT3Iw1mBmVF84e")
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log(`Clicked: ${this.response.value} times!`);
        $("#count").text(this.response.value);
    }
    xhr.send();
// $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/counter?id=filipteczalove',
//         headers: { 'X-Api-Key': 'WRz4TD0hfcCeh6F+v6c/oQ==NkyT3Iw1mBmVF84e'},
//         contentType: 'application/json',
//         success: function(result) {
//             console.log(result.value);
//             $("#count").text(result.value);
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }
//     });
    
});
updateLoveCount();
