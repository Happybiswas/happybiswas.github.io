// window.onload = rotate;
window.onload = initBannerLink;

var theAd = 0;

var adURL = new Array ("oracle.com","microsoft.com","amazon.com","disney.com","gamestop.com","comicmastersonline.com");

var adImages = new
Array("images/superhero1.png","images/superhero2.png","images/superhero3.png","images/superhero4.png","images/superhero5.png","images/superhero6.png"
);



function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "A")
    {
    document.getElementById("adBanner").parentNode.onclick =
    newLocation;
    }
    rotate();


}

function newLocation() {
    document.location.href = "http://www." + adURL[theAd];
    return false;
    }
    
function rotate() {
    theAd++;
    if (theAd == adImages.length) {
    theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];
    setTimeout(rotate, 3 * 1000);
    }