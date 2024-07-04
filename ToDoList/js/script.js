const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

/*funcion del boton de agregar*/
addBtn.addEventListener("click", (e) => {
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    /*se crea el checkbox*/
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "cheki";
    li.appendChild(checkbox);
    checkbox.addEventListener("click", (e) => {
      if (checkbox.checked) {
        p.style.textDecoration = "line-through";
      } else {
        p.style.textDecoration = "none";
      }
    });
    /*check*/

    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

/*funcion del boton de borrar*/
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
  });

  return deleteBtn;
}

/*funcion para el verificador de tareas completadas*/
/*se puede determinar si el elemento se selecciono o no*/
/*si se selecciona el elemento (click), se muestra un alert */

function verificar() {
  if (document.getElementById("click").checked) {
    alert("Has cumplido con todas tus tareas por hoy");
  }
}
