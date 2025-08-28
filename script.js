document.addEventListener("DOMContentLoaded", () => {

  function AgregarImagen() {
    // Add an image to the section "descripcion-contenido-libro"
    const aside = document.querySelector(".datos-libro");
    if (aside) {
      const img = document.createElement("img");
      img.src = "imagenes/ImagenLibros.png"; 
      img.alt = "Imagen agregada";
      img.style.display = "block";
      img.style.margin = "10px auto";
      img.style.width = "50%";
      img.style.height="50%"; // Set a width for better appearance
      aside.appendChild(img);
    }
  }

  function CambiarFormato() {
    // Your code here
  }

  function EditarTitulo() {
    // Your code here
  }

  function CambiarFuenteSubtitulo() {
    // Your code here
  }

  window.AgregarImagen = AgregarImagen;
  window.CambiarFormato = CambiarFormato;
  window.EditarTitulo = EditarTitulo;
  window.CambiarFuenteSubtitulo = CambiarFuenteSubtitulo;
});
