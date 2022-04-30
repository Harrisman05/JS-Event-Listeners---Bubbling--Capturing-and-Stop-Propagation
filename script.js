const colorBox = document.querySelector(".colorBox")
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const captureGrandparent = document.querySelector("#captureGrandparent");
const captureParent = document.querySelector("#captureParent");
const captureChild = document.querySelector("#captureChild");
const stopGrandparent = document.querySelector("#stopGrandparent")
const stopParent = document.querySelector("#stopParent");
const stopChild = document.querySelector("#stopChild");
const onceGrandparent = document.querySelector("#onceGrandparent")
const onceParent = document.querySelector("#onceParent");
const onceChild = document.querySelector("#onceChild");


// Changing CSS property on click

colorBox.addEventListener("click", function (e) {
    console.log(e.target); // prints the element that was clicked
    colorBox.style.backgroundColor = "orange"; // document.getElementById(id).style.property = new style
    colorBox.textContent = "I've been clicked on";
});

colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "aqua";
    colorBox.textContent = "I've been hovered on";
});

// Event Bubbling: Console logging and colour change

grandparent.addEventListener("click", (e) => {
    console.log("Grandparent");
    e.currentTarget.style.backgroundColor = "yellow";
});

parent.addEventListener("click", function (e) {
    console.log("Parent");
    e.currentTarget.style.backgroundColor = "yellow";
});

/* Clicking on Child is triggers event listeners on Parent and 
Grandparent. The event is bubbling up the DOM Tree */

child.addEventListener("click", function (e) {
    console.log("Child");
    e.target.style.backgroundColor = "yellow";
});

// Event caputuring

/* set capture to true to capture an event that propagates
down the DOM Tree */

captureGrandparent.addEventListener("click", function (e) {
    console.log("Grandparent capture");
}, {
    capture: true
});

captureParent.addEventListener("click", function (e) {
    console.log("Parent capture");
}, {
    capture: true
});

captureChild.addEventListener("click", function (e) {
    console.log("Child capture");
}, {
    capture: true
});

captureGrandparent.addEventListener("click", function (e) {
    console.log("Grandparent bubble");
});

captureParent.addEventListener("click", function (e) {
    console.log("Parent bubble");
});

captureChild.addEventListener("click", function (e) {
    console.log("Child bubble");
});

//////////////////////////////////////////////////////////

// Event stop propagation

stopGrandparent.addEventListener("click", function (e) {
    console.log("Grandparent capture");
}, {
    capture: true
});

stopParent.addEventListener("click", function (e) {
    console.log("Parent capture");
    e.stopPropagation();
}, {
    capture: true
});

// Propagation stopped at this point, none of the below eventListeners
// activate

stopChild.addEventListener("click", function (e) {
    console.log("Child capture");
}, {
    capture: true
});

stopGrandparent.addEventListener("click", function (e) {
    console.log("Grandparent bubble");
});

stopParent.addEventListener("click", function (e) {
    console.log("Parent bubble");
});

stopChild.addEventListener("click", function (e) {
    console.log("Child bubble");
});

// Running an event once

onceGrandparent.addEventListener("click", function (e) {
    console.log("Grandparent bubble");
});

onceParent.addEventListener("click", function (e) {
    console.log("Parent bubble");
});

/* Child event will only run once, then the eventListener
will remove itself */

onceChild.addEventListener("click", function (e) {
    console.log("Child once");
}, {
    once: true
});