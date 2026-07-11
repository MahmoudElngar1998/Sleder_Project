// Get Slider Items | Array.From[ES6 Featurs]
var slidImages = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number OF Slides
var SliderCount = slidImages.length;

// set Current Slide
var currentSlede = 1   

// Slide Number Element
var slideNumberElement = document.getElementById("slider-Number");

//Previous And Next Button
var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")

// Handle Click Previous And Next Button
nextButton.onclick = nextSlide
prevButton.onclick = prevSlide



// Create The Main UL Element

var paginationElement = document.createElement("ul")
paginationElement.setAttribute("id", "pagination-ul")

for(var i = 1; i <= SliderCount; i++){

    var paginationItems=document.createElement("li")

    paginationItems.setAttribute("data-index", i)

    paginationItems.appendChild(document.createTextNode(i))

    paginationElement.appendChild(paginationItems)
}

document.getElementById("indicators").appendChild(paginationElement)

//get The Created UL Element To The Page

var paginationCreateUl =document.getElementById("pagination-ul")

var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

for(var i = 0; i < paginationBullets.length; i++ ){

    paginationBullets[i].onclick = function(){

        currentSlede = parseInt(this.getAttribute("data-index"));

        theChecker ()
    }
}


theChecker ()

//Next Slider Function
function nextSlide (){
    
    if(nextButton.classList.contains("disabled")){
        return false
    }else{
        currentSlede++;
        theChecker()
    }
}
//Previous Slider Function
function prevSlide (){
    if(prevButton.classList.contains("disabled")){
        return false
    }else{
        currentSlede--;
        theChecker()
    }
}

function theChecker () {

    slideNumberElement.textContent = "Slider # " + (currentSlede) + ' of ' + (SliderCount)

    removeAllActive()

    slidImages[currentSlede - 1].classList.add("active")
    
    paginationCreateUl.children[currentSlede - 1].classList.add("active")

    if(currentSlede == 1){
        prevButton.classList.add("disabled")
    } else{
        prevButton.classList.remove("disabled")
    
    }


    if(currentSlede == SliderCount){
        nextButton.classList.add("disabled")
    } else{
        nextButton.classList.remove("disabled")
    
    }
}

function removeAllActive(){

    slidImages.forEach(function (img){
        img.classList.remove("active")
    })

    paginationBullets.forEach(function (bullet){

        bullet.classList.remove("active")
    })  

}


