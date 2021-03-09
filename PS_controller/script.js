
var menuList = document.getElementById("menuList")
var menuIcon = document.getElementById("menuIcon")

menuList.style.maxHeight = "0px";

//HAMBURGER NAV THAT ADDS SIMPLE ANIMATION

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuIcon.style.animation =  'spin 2s infinite';
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px"
        menuIcon.style.animation =  'none';
    }
}