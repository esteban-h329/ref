document.addEventListener("DOMContentLoaded", function () {
  // Evento para desplazar a la sección del formulario
  document.getElementById("formBtn").addEventListener("click", function () {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  });

  // Evento para desplazar a la sección de FAQ
  document.getElementById("faqBtn").addEventListener("click", function () {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".faq-toggle").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    parent.classList.toggle("active");
  });
});
