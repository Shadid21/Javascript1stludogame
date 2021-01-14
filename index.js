
var randomnumber1 = Math.floor(Math.random()*5 + 1);

var randomimage1 = "images/dice" + randomnumber1 + ".png";

var randomimagechanging = document.querySelector(".img1");

 randomimagechanging.setAttribute("src", randomimage1);


 var randomnumber2 = Math.floor(Math.random()*5 + 1);

 var randomimage2 = "images/dice" + randomnumber2 + ".png";

 var randomimagechanging = document.querySelector(".img2");

  randomimagechanging.setAttribute("src", randomimage2);

  if (randomimage1>randomimage2) {
    document.querySelector("h1").innerHTML = "Alem win";
  }
  else if  (randomimage2>randomimage1) {
    document.querySelector("h1").innerHTML = "Masum vai win";
  }
  else {
      document.querySelector("h1").innerHTML = "Draw";
  }
