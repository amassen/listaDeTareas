const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("#lista");
const empty = document.querySelector(".empty");
const ulHisto = document.querySelector(".ul-histo");
const histoBtn = document.querySelector(".btn-histo");

const historial = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    historial.push(text);

    input.value = "";
    empty.style.display = "none";

  }
  
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = historial[historial.length-1];
  li.appendChild(p);
  ulHisto.appendChild(li);

});

function verOcultar() {
  var x = document.getElementById("ulhisto");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
