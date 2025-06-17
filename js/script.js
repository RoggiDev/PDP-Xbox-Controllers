const lenis = new Lenis({
  autoRaf: true,
  duration: 1.2,
  smooth: true,
  orientation: "vertical",
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function (event) {
    event.preventDefault();

    const enlace = this.getAttribute("href");

    Swal.fire({
      title: "Confirmación de redirección",
      text: "Está a punto de ser redireccionado al sitio oficial de PDP.\n¿Desea continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(enlace, "_blank");
      }
    });
  });
});
