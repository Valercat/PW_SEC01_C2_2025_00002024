document.addEventListener("DOMContentLoaded", () => {
  function CambiarFormato() {
    const contenedor = document.querySelector(".descripcion-contenido");
    if (contenedor) {
      contenedor.classList.toggle("cambiar-formato");
    }
  }
  function EditarTitulo() {
    const titulo = document.querySelector(".header-principal");
    if (titulo) {
      const nuevoTitulo = prompt("Ingrese el nuevo título del libro:", titulo.textContent);
      if (nuevoTitulo !== null && nuevoTitulo.trim() !== "") {
        titulo.textContent = nuevoTitulo;
        titulo.classList.toggle("titulo-editado");
      }
    }
  }

  function CambiarFuenteSubtitulo() {
    const subtituloFuente = document.querySelector(".descripcion-contenido-libro");
    if (subtituloFuente) {
      subtituloFuente.classList.toggle("subtitulo-fuente");
    }
  }

  function AgregarImagen() {
    const aside = document.querySelector(".datos-libro");
    const img = document.createElement("img");
    img.src = "imagenes/ImagenLibros.png";
    img.alt = "Imagen agregada";
    img.className = "imagen-libro";
    aside.appendChild(img);
  }

  window.AgregarImagen = AgregarImagen;
  window.CambiarFormato = CambiarFormato;
  window.EditarTitulo = EditarTitulo;
  window.CambiarFuenteSubtitulo = CambiarFuenteSubtitulo;
});
