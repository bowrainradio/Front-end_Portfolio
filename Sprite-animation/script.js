
$(document).ready(function(){
    let img_tracker = "walking"
    let img = $("#skeleton-sprite")
    $("#skeleton").click(function(){
        if(img_tracker == "walking"){
            img.attr('class', 'skeleton_sprite--waiting pixel_art')
            img.attr('src', 'img/skeleton-waiting.png')
            img_tracker = "waiting"
        } else {
            img.attr('class', 'skeleton_sprite--walking pixel_art')
            img.attr('src', 'img/skeleton-walking.png')
            img_tracker = "walking"
        }
    });    
});

//reset

for(let i=0; i <= 5; i++){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/update/filipteczalove/flyingbisons/?amount=-1");
    xhr.responseType = "json";
    xhr.send();
}