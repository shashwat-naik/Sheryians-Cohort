var isStatus = document.querySelector("h5");
var Btn = document.querySelector("#add");

var flag = 0;
Btn.addEventListener("click", function () {
  if (flag == 0) {
    isStatus.innerHTML = "Request Sending..";
    isStatus.style.color = "gold";
    Btn.innerHTML = "Adding..";
    setTimeout(function () {
      isStatus.innerHTML = "Friends";
      isStatus.style.color = "rgb(50, 110, 50)";
      Btn.innerHTML = "Remove Friend";
      flag = 1;
    }, 2000);
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    Btn.innerHTML = "Add Friend";
    flag = 0;
  }
});
