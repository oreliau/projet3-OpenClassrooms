document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "visible"; 
        document.querySelector( 
          "#loader").style.visibility = "hidden"; 
    } else { 
        document.querySelector( 
          "#loader").style.display = "visible"; 
        document.querySelector( 
          "body").style.visibility = "none"; 
    } 
}; 

let background = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');

function imageStartAt(imageNode, timeOut){
    setTimeout(function(){ imageNode.querySelector('img').classList.remove('disp-no'); }, timeOut);
}

window.addEventListener('scroll', function(){
    let scrollValue = window.scrollY;
    let offsetTop = document.querySelector('.main-content').offsetTop
    background.style.top = scrollValue * 0.5 + "px";
    moon.style.left = -scrollValue * 0.5 + "px";
    mountain.style.top = -scrollValue * 0.15 + "px";
    road.style.top = scrollValue * 0.15 + "px";
    text.style.top = scrollValue * 1 + "px";

    if(scrollValue > (offsetTop - (offsetTop/2))){
        const imagesOngletFirst = document.querySelector('#image-onglet1');
        const imagesOngletSecond = document.querySelector('#image-onglet2');
        const imagesOngletThird = document.querySelector('#image-onglet3');
        const imagesOngletFourth = document.querySelector('#image-onglet4');
        const textDescription = document.querySelector('.description-association');

        imageStartAt(imagesOngletFirst, 250);
        imageStartAt(imagesOngletSecond, 550);
        imageStartAt(imagesOngletThird, 750);
        imageStartAt(imagesOngletFourth, 500);
        setTimeout(function(){ textDescription.classList.remove('disp-no'); }, 500);
    }
})