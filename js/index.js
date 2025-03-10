document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah perpindahan langsung
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = button.getAttribute("href");
        }, 500); // Waktu transisi 500ms
    });
});
