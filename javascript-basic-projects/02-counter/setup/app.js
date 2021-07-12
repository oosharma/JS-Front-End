// let decreaseBtn = document.getElementById("decreaseBtn");
// let increaseBtn = document.getElementById("increaseBtn");
// let resetBtn = document.getElementById("resetBtn");

let count = 0;
let counterElement = document.getElementById("counterVal");
let allBtns = document.querySelectorAll(".btn");

allBtns.forEach((btn) => {
    console.log(btn.classList);
    btn.addEventListener('click', function (e) {
        const styles = btn.classList;
        console.log(e.currentTarget.classList)
        console.log(e)

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        counterElement.textContent = count;

    })
    console.log('here')
})



// function updateCounter(val) {
//     counterVal += val
//     counterElement.textContent = counterVal;
// }

// decreaseBtn.addEventListener('click', function () {
//     updateCounter(-1)
// });

// increaseBtn.addEventListener('click', function () {
//     updateCounter(1)
// });

// resetBtn.addEventListener('click', function () {
//     counterVal = 0;
//     counterElement.textContent = counterVal;
// });