document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const eventDate = new Date("March 15, 2025 15:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        
        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Acara sudah dimulai!";
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".card");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, 300 * index);
    });
});

function openMap(url) {
    window.open(url, "_blank");
}

