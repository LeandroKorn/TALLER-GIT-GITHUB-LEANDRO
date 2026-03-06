/* =============================================
   GIMNASIO ATENAS — script.js
   NOTA: El form de #contacto no fue modificado,
   solo se mantuvo la lógica original.
   ============================================= */

// -----------------------------------------------
// 1. MENÚ HAMBURGUESA (mobile)
// -----------------------------------------------
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Cerrar el menú al hacer click en un link
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// -----------------------------------------------
// 2. LINK ACTIVO EN NAVBAR (scroll spy)
// -----------------------------------------------
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// -----------------------------------------------
// 3. SCROLL REVEAL (aparición suave de elementos)
// -----------------------------------------------
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay escalonado para las cards
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 120);
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));

// -----------------------------------------------
// 4. FORMULARIO DE CONTACTO
//    (lógica original sin modificar)
// -----------------------------------------------
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