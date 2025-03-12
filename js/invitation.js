document.addEventListener("DOMContentLoaded", function () {
    // Atur waktu acara (YYYY, MM (0-indexed), DD, HH, MM, SS)
    const eventDate = new Date(2026, 4, 30, 8, 0, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }

    updateCountdown(); // Panggil sekali agar tidak kosong saat pertama kali
    setInterval(updateCountdown, 1000); // Update setiap detik
});


document.addEventListener("DOMContentLoaded", () => {
    const introContainer = document.querySelector(".invitation-intro-container");
    const animatedSections = document.querySelectorAll(".invitation-box-container, .invitation-map-container, .invitation-intro, .invitation-intro-container");
    const animatedTexts = document.querySelectorAll(".invitation-intro-container h1, .invitation-box-container h2, .invitation-box-container p, .invitation-map-container h2, .invitation-map-container p, h1, blockquote");

    // Efek Parallax untuk latar belakang
    window.addEventListener("scroll", () => {
        introContainer.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });

    // Setup tampilan awal intro
    Object.assign(introContainer.style, {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: "1",
        transition: "opacity 1s ease-out"
    });

    function hideElements() {
        animatedSections.forEach(section => {
            Object.assign(section.style, {
                opacity: "0",
                transform: "translateY(60px)",
                filter: "blur(10px)"
            });
        });

        animatedTexts.forEach(text => {
            Object.assign(text.style, {
                opacity: "0",
                transform: "translateY(40px) scale(0.9)",
                filter: "blur(8px)"
            });
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight - 100) && rect.bottom >= 0;
    }

    function revealElementsOnScroll() {
        animatedSections.forEach((section, index) => {
            if (isElementInViewport(section)) {
                setTimeout(() => {
                    Object.assign(section.style, {
                        opacity: "1",
                        transform: "translateY(0)",
                        filter: "blur(0)"
                    });
                }, index * 300);
            } else {
                Object.assign(section.style, {
                    opacity: "0",
                    transform: "translateY(60px)",
                    filter: "blur(10px)"
                });
            }
        });

        animatedTexts.forEach((text, index) => {
            if (isElementInViewport(text)) {
                setTimeout(() => {
                    Object.assign(text.style, {
                        opacity: "1",
                        transform: "translateY(0) scale(1)",
                        filter: "blur(0)"
                    });
                }, index * 150);
            } else {
                Object.assign(text.style, {
                    opacity: "0",
                    transform: "translateY(40px) scale(0.9)",
                    filter: "blur(8px)"
                });
            }
        });
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            introContainer.style.height = "auto";
        }
        revealElementsOnScroll();
    });

    hideElements();
    revealElementsOnScroll();
});
