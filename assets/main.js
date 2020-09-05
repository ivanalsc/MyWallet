const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const navMenu = document.querySelector(".aside");
let ctx = document.querySelector("#myChart");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});

ctx.getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Alquiler", "Varios", "Supermercado"],
    datasets: [
      {
        label: "Num datos",
        data: [15, 9, 5],
        backgroundColor: [
          "rgb(166, 172, 236)",
          "rgb(172, 231, 239)",
          "rgb(253, 62, 129)",
        ],
      },
    ],
  },
});
ctx.style.width = "80%";
ctx.style.margin = "auto";
