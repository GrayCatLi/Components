const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

function hideAllContent() {
  contents.forEach((item) => {
    item.classList.remove("show");
  });
}

function hideAllItems() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContent();
    hideAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});
