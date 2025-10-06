// alert("Selamat datang di project web statis kelompok 7")

const toggle = document.getElementById("darkmode");
const body = document.body;

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    body.classList.add("darkmode");
  } else {
    body.classList.remove("darkmode");
  }
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}