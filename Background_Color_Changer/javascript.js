let button = document.querySelectorAll(".box");
let body = document.querySelector("body");
let currentColor = ""; 

button.forEach(function (box) {
  box.addEventListener("click", function (event) {
    const newColor = event.target.id === "box1" ? "red" :
                     event.target.id === "box2" ? "green" :
                     event.target.id === "box3" ? "pink" :
                     event.target.id === "box4" ? "yellow" :
                     event.target.id === "box5" ? "purple" : "";

    if (body.style.backgroundColor === newColor) {
      
      body.style.backgroundColor = "";
      currentColor = "";
    } else {
      body.style.backgroundColor = newColor;
      currentColor = newColor;
    }
  });
});
