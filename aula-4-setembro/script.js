document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const buttons = document.querySelectorAll('.btn-manual');
    let currentSlide = 0;
    const totalSlides = buttons.length;

    function goToSlide(index) {
        slides.style.transform = `translateX(-${index * 20}%)`;
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    // Auto-slide every 2 seconds
    setInterval(nextSlide, 2000);

    // Manual navigation
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentSlide = index;
            goToSlide(currentSlide);
        });
    });
});
