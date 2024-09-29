const categoryfilter = document.getElementById("categoryFilter");
const peliculas = document.querySelectorAll(".pelicula");

categoryfilter.addEventListener("change", filtrarCategorias);

function filtrarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  peliculas.forEach((peliculas) => {
    const categoria = peliculas.getAttribute("data-category");
    if (
      categoriaSeleccionada === "todas" ||
      categoria === categoriaSeleccionada
    ) {
      peliculas.style.display = "block";
    } else {
      peliculas.style.display = "none";
    }
  });
}
