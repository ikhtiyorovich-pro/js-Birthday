let x = document.querySelector(".form");
let myquery=document.querySelector(".container-fluid");
x.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let name = x.querySelector("#fname").value;
  let name = x.querySelector("#lname").value;
  let date = x.querySelector("#tdate").value;
  x.setAttribute("style","display: none !important");
  var element=document.createElement("div");
  element.classList.add("h1");
  // element.appendChild(document.createTextNode("Hello"));
  element.textContent=`${name} ${name} ${date}`;
  myquery.appendChild(element); 
  
})
