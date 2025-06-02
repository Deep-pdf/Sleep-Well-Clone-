document.addEventListener('DOMContentLoaded', function () {
    // Focus email input on Get Started click
    const getStartedBtn = document.querySelector('.get-started');
    const emailInput = document.querySelector('.email-input');
    if (getStartedBtn && emailInput) {
        getStartedBtn.addEventListener('click', function () {
            emailInput.focus();
        });
    }

    // Get all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownLinks = dropdownContent.querySelectorAll('a');

        // Toggle dropdown on button click
        dropbtn.addEventListener('click', function (e) {
            e.stopPropagation();

            // Close all other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(dc => {
                if (dc !== dropdownContent) dc.style.display = 'none';
            });

            // Toggle current dropdown
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Handle option click
        dropdownLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                dropbtn.textContent = this.textContent;
                dropdownContent.style.display = 'none';
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown-content').forEach(dc => {
            dc.style.display = 'none';
        });
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

    const accordionItems = document.querySelectorAll('.bars');

    accordionItems.forEach(item => {
        const question = item.querySelector('.questions')
        const icon = question.querySelector('.icon');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            item.classList.toggle('active');
            icon.textContent = isActive ? '+' : '×';
        });
    });
});