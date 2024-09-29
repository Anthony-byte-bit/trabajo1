const peliculas2 = document.querySelectorAll(".pelicula");
peliculas2.forEach((pelicula) => {
  const favoritoButton = pelicula.querySelector(".button");

  favoritoButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (favoritoButton.style.backgroundColor === "blue") {
      favoritoButton.style.backgroundColor = "";
    } else {
      favoritoButton.style.backgroundColor = "blue";
    }
  });
});
