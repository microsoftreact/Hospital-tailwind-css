const btnGroup = document.querySelectorAll("#btn"),
  menu = document.getElementById("menu"),
  newListItem = document.getElementById("new-list-item"),
  newListItemRemove = document.getElementById("new-list-item-remove"),
  newList = document.querySelector(".new-list"),
  illHistorys = document.querySelector(".ill-historys"),
  addBtn = document.getElementById("add-btn"),
  shikoyati = document.getElementById("shikoyati"),
  bosimi = document.getElementById("bosimi"),
  puls = document.getElementById("puls"),
  analizlar = document.getElementById("analizlar"),
  diagnos = document.getElementById("diagnos"),
  retsept = document.getElementById("retsept"),
  vrach = document.getElementById("vrach");

btnGroup.forEach((btn) => {
  btn.onclick = () => {
    if (btn.dataset.btn === "1") {
      menu.classList.remove("menu-active");
    } else if (btn.dataset.btn === "2") {
      menu.classList.add("menu-active");
    }
  };
});

newListItem.addEventListener("click", () => {
  newList.classList.add("new-list-active");
});
newListItemRemove.addEventListener("click", () => {
  newList.classList.remove("new-list-active");
  shikoyati.value = "";
  bosimi.value = "";
  puls.value = "";
  analizlar.value = "";
  diagnos.value = "";
  retsept.value = "";
  vrach.value = "";
});
addBtn.onclick = () => {
  let listItem = document.createElement("div");
  listItem.className =
    "w-[280px] h-[200px] p-3 border-[3px] border-orange-500 bg-[#b9d7d5]";
  listItem.innerHTML = `
      <h2><b>Shikoyati:</b> ${shikoyati.value}</h2>
      <h2><b>Arterial bosimi:</b> ${bosimi.value}</h2>
      <h2><b>Puls:</b> ${puls.value}</h2>
      <h2><b>Analizlar:</b> ${analizlar.value}</h2>
      <h2><b>Diagnos:</b> ${diagnos.value}</h2>
      <h2><b>Retsept:</b> ${retsept.value}</h2>
      <h2><b>Vrach F.I.O.:</b> ${vrach.value}</h2>
    `;
  illHistorys.appendChild(listItem);
  newList.classList.remove("new-list-active");
  shikoyati.value = "";
  bosimi.value = "";
  puls.value = "";
  analizlar.value = "";
  diagnos.value = "";
  retsept.value = "";
  vrach.value = "";
};
