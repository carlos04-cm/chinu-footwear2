const botonColecciones = document.getElementById("toggleColecciones");
const colecciones = document.querySelector(".colecciones");

botonColecciones.addEventListener("click", () => {
    if (colecciones.style.display === "none") {
        colecciones.style.display = "grid";
        botonColecciones.textContent = "Ocultar colecciones";
    } else {
        colecciones.style.display = "none";
        botonColecciones.textContent = "Mostrar colecciones";
    }
});
