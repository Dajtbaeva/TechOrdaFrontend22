let btns = document.querySelectorAll("button");
let screenVal = document.getElementById("res");

for (let i of btns) {
  i.addEventListener("click", function (e) {
    let val = e.target.innerText;
    if (val === "C") {
      screenVal.innerHTML = "";
      val = "";
    } else if (val === "=") {
      val = eval(screenVal.innerHTML.replace(/([01]+)/g, "0b$1")).toString();
      screenVal.innerHTML = Number(val).toString(2);
    } else screenVal.innerHTML += val;
  });
}
