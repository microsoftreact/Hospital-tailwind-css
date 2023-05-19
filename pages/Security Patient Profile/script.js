const btnGroup = document.querySelectorAll("#btn"),
  menu = document.getElementById("menu");

btnGroup.forEach((btn) => {
  console.log(btn);
  console.log(btn.dataset);
  btn.onclick = () => {
    if (btn.dataset.btn === "1") {
      menu.classList.remove("menu-active");
    } else if (btn.dataset.btn === "2") {
      menu.classList.add("menu-active");
    }
  };
});
