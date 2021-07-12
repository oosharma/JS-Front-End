// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let toggleButton = document.querySelector(".nav-toggle");
let linksListElement = document.querySelector(".links");

toggleButton.addEventListener('click', function(){
    let linksListElementClasses = linksListElement.classList;
    if(linksListElementClasses.contains("toggled-link")){
        linksListElementClasses.remove("toggled-link")
    } else {
        linksListElement.classList.add("toggled-link")
    }
    
})

