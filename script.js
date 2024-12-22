var mainDiv = document.getElementById("Main_div");

var counter = 0;

function UpDateDiv() {
    mainDiv.innerHTML = counter;
}

function Increment() {
    counter++;
    UpDateDiv();
}

function Decrement() {
    counter--;
    UpDateDiv();
}