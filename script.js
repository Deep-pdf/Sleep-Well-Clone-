document.addEventListener('DOMContentLoaded', function () {
    // Focus email input on Get Started click
    const getStartedBtn = document.querySelector('.get-started');
    const emailInput = document.querySelector('.email-input');
    if (getStartedBtn && emailInput) {
        getStartedBtn.addEventListener('click', function () {
            emailInput.focus();
        });
    }

    // Dropdown language selection
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    // Toggle dropdown on button click
    dropbtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Select option and close dropdown
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            dropbtn.textContent = this.textContent;
            dropdownContent.style.display = 'none';
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        dropdownContent.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("card");

    window.nextSlide = function () {
        const cardWidth = container.querySelector(".image-box").offsetWidth + 10; // include gap
        container.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    };

    window.prevSlide = function () {
        const imageBox = container.querySelector(".image-box");
        if (!imageBox) return;

        const cardWidth = imageBox.offsetWidth + 10;
        container.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });
    };
});