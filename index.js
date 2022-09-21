const imageContainerEl = document.querySelector(".image-container"); 

const imgEl = document.getElementsByTagName("img")

const leftArrowEL = document.querySelector(".left");

const rightArrowEl = document.querySelector(".right");

 let currentImage = 1;

rightArrowEl.addEventListener("click", ()=>{
    updateImage();
    currentImage++
})

const updateImage = ()=>{
    if(currentImage > 2){
        currentImage = 0;
    }
    imageContainerEl.style.transform = `translateX(-${currentImage*500}px)`
}


leftArrowEL.addEventListener("click", ()=>{
    currentImage--
    updateImage();
})

