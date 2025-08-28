document.addEventListener("DOMContentLoaded", () => {
  function CambiarFormato() {
    const contenedor = document.querySelector(".descripcion-contenido");
    if (contenedor) {
      contenedor.classList.toggle("cambiar-formato");
    }
  }
  function EditarTitulo() {
    // Your code here
  }

  function CambiarFuenteSubtitulo() {
    // Your code here
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
