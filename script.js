// // get references
// let aquaButton = document.getElementById("aqua");
// let tealButton = document.getElementById("teal");
// let pinkButton = document.getElementById("pink");
// let purpleButton = document.getElementById("purple");
// let colorlessButton = document.getElementById("colorless");

// let canvas = document.querySelector("div");

// aquaButton.onclick = function() {
//     canvas.style.backgroundColor = "aqua";
//     canvas.innerHTML = aquaButton.innerHTML;
// }

// tealButton.onclick = function() {
//     canvas.style.backgroundColor = "teal";
//     canvas.innerHTML = tealButton.innerHTML;
// }

// pinkButton.onclick = function() {
//     canvas.style.backgroundColor = "pink";
//     canvas.innerHTML = pinkButton.innerHTML;
// }

// purpleButton.onclick = function() {
//     canvas.style.backgroundColor = "purple";
//     canvas.innerHTML = purpleButton.innerHTML;
// }

// colorlessButton.onclick = function() {
//     canvas.style.backgroundColor = "white";
//     canvas.innerHTML = colorlessButton.innerHTML;
// }

// get references
let canvas = document.querySelector("div");
let buttonArray = document.querySelectorAll("button");
console.log(buttonArray);

// use a for loop to iterate through each button and set an onclick function for each button
for (let i = 0; i < buttonArray.length; i++) {

    buttonArray[i].onclick = function() {
        canvas.style.backgroundColor = buttonArray[i].innerHTML;
        canvas.innerHTML = buttonArray[i].innerHTML;

        if (buttonArray[i].innerHTML == "colorless") {
            canvas.style.backgroundColor = "white";
        }
    }
}


