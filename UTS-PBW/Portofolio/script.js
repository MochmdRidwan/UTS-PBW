document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ Smooth Scroll untuk Semua Link di Navbar & Tombol "Kembali ke Beranda"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Menghindari navbar menutupi konten
                    behavior: "smooth"
                });
            }
        });
    });

    // 2️⃣ Efek Fade In pada Hero Section
    const heroSection = document.querySelector(".hero-card");
    heroSection.style.opacity = 0;
    heroSection.style.transform = "translateY(-20px)";
    setTimeout(() => {
        heroSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroSection.style.opacity = 1;
        heroSection.style.transform = "translateY(0)";
    }, 500);

    // 3️⃣ Efek Hover pada Card Portfolio
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // 4️⃣ Efek Hover pada Tombol
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
            this.style.transition = "box-shadow 0.3s ease-in-out";
        });
        button.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });
});
