document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('.get-started');
    const emailInput = document.querySelector('.email-input');
    if(getStartedBtn && emailInput) {
        getStartedBtn.addEventListener('click', function() {
            emailInput.focus();
        });
    }
});