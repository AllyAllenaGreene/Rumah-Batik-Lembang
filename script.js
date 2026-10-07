// =========================
// ANIMASI SAAT SCROLL
// =========================

const sections = document.querySelectorAll(
    ".content-section, .gallery-section, .contact-section"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


// =========================
// TAHUN FOOTER OTOMATIS
// =========================

const year = new Date().getFullYear();

const footerYear = document.querySelector("footer small");

if (footerYear) {

    footerYear.textContent =
        `© ${year} Rumah Batik Lembang`;

}