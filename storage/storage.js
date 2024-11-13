//variables
const input =  document.getElementById("input");
const output = document.getElementById("output");
const clear = document.getElementById('clear');
const add = document.getElementById("add")

//shows output after refresh from previous session
output.innerHTML = localStorage.getItem("value")

//eventListeners
input.addEventListener("keyup", myFunc)

clear.addEventListener("click", clearFunc)




//adds input values to local storage and gets them from localstorage
function myFunc(){
    localStorage.setItem("value", input.value)
    output.innerHTML = localStorage.getItem("value")
}

//removes one item from the localstorage   localstorage.clear(), will remove all the LS
function clearFunc(){
    localStorage.removeItem("value");
}








