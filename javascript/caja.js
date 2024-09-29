const peliculas2 = document.querySelectorAll(".pelicula");
const peliculitaModal = document.getElementById("peliculitaModal");
const closeModal = document.getElementById("closeModal");

function openpeliculitaModal(peliculita) {
  document.getElementById("modalTitle").textContent = peliculita.name;
  document.getElementById("modalImage").src = peliculita.image;
  document.getElementById("modalDescription").textContent =
    peliculita.description;
  peliculitaModal.style.display = "flex";
}

peliculas2.forEach((pelicula) => {
  pelicula.addEventListener("click", () => {
    const peliculita = {
      name: pelicula.querySelector(".peli-title").textContent,
      image: pelicula.querySelector(".peli-image").src,
      description: pelicula.querySelector(".peli-descrip").textContent,
    };
    openpeliculitaModal(peliculita);
  });
});

closeModal.addEventListener("click", () => {
  peliculitaModal.style.display = "none";
});
