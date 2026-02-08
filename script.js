const form = document.getElementById("contactForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (nombre === "" || telefono === "") {
        mensaje.textContent = "Por favor completa todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "¡Gracias! Te contactaremos pronto 💪";
    mensaje.style.color = "green";
    form.reset();
});
