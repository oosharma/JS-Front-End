let control1 = document.getElementById("1");
let control2 = document.getElementById("2");
let control3 = document.getElementById("3");

let slider = document.getElementById("slider");
let currentSlide = document.getElementById("currentSlide");
let captionText = document.getElementById("captionText");

let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let currentSlideNum = 1;
let urlArr = ["url('./img-1.jpeg')", "url('./img-2.jpeg')", "url('./img-3.jpeg')"]

control1.addEventListener("click", function () {
    slider.style.backgroundImage = "url('./img-1.jpeg')";
    currentSlide.innerHTML = "1"
    currentSlideNum = 1;
});

control2.addEventListener("click", function () {
    slider.style.backgroundImage = "url('./img-2.jpeg')";
    currentSlide.innerHTML = "2"
    currentSlideNum = 2;
});

control3.addEventListener("click", function () {
    slider.style.backgroundImage = "url('./img-3.jpeg')";
    currentSlide.innerHTML = "3"
    currentSlideNum = 3;
});

rightArrow.addEventListener("click", function () {
    currentSlideNum = (currentSlideNum + 1) % 3;
    slider.style.backgroundImage = urlArr[currentSlideNum];
})

leftArrow.addEventListener("click", function () {
    currentSlideNum = (currentSlideNum - 1 + 3) % 3;
    slider.style.backgroundImage = urlArr[currentSlideNum];
    console.log(currentSlideNum);
})