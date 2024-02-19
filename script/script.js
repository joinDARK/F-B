pages = document.querySelectorAll(".page")
text = document.querySelector("#controller h4")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
currentIndex = 0

leftButton.onclick = GoToPrevSlide
rightButton.onclick = GoToNextSlide

function GoToPrevSlide() {
    pages[currentIndex].className = "page"
    
    return GoToSlide(currentIndex - 1)
}

function GoToNextSlide() {
    pages[currentIndex].className = "page"

    return GoToSlide(currentIndex + 1)
}
  
function GoToSlide(index) {
    if(index < 0) {
        index = 2
    } else if(index > 2) {
        index = 0
    }

    pages[index].className = "page active"

    text.textContent = `${index + 1} из ${GetCountPages(pages)}`

    return currentIndex = index
}

function GetCountPages(Pages) {
    return Pages.length
}