var isStatus = document.querySelector("h5");
var Btn = document.querySelector("#add");
// var removeBtn = document.querySelector("#remove");

var flag = 0;
Btn.addEventListener("click", function () {
  if (flag == 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "rgb(50, 110, 50)";
    Btn.innerHTML="Remove Friend";
    flag=1;
} else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    Btn.innerHTML="Add Friend";
    flag=0;
  }
});


/* removeBtn.addEventListener("click", function(){
    isStatus.innerHTML="Stranger";
    isStatus.style.color="red";
}) */
