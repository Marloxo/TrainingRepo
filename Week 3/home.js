var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

function generateFaces() {
    for (var index = 0; index < numberOfFaces; index++) {
 
        var element = numberOfFaces;
        var img = document.createElement("img");
        img.src = "smile.png";
        img.style.top = Math.random() * 400;
        img.style.left = Math.random() * 400;
        //numberOfFaces++;
        var x = theLeftSide.appendChild(img);
 
   }
}