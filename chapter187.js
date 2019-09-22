var button = document.getElementById("button")
var h1 = document.getElementById("h1")
var body = document.body

button.addEventListener("click", function () {
   if (body.style.backgroundColor === "purple") {
      body.style.backgroundColor = "white"
      h1.style.color = "black"
   }
   else {
      body.style.backgroundColor = "purple"
      h1.style.color = "white"
   }
})