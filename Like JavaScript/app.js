let con = document.querySelector("#container");
let love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.color = "red";

  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 300);
});
