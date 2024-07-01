document.addEventListener("DOMContentLoaded", function() {
    const pendaftaranLink = document.getElementById("pendaftaran-link");
    const pendaftaranDropdown = document.getElementById("pendaftaran-dropdown");

    pendaftaranLink.addEventListener("mouseover", function() {
        pendaftaranDropdown.style.display = "block";
    });

    pendaftaranLink.addEventListener("mouseout", function() {
        pendaftaranDropdown.style.display = "none";
    });

    pendaftaranDropdown.addEventListener("mouseover", function() {
        pendaftaranDropdown.style.display = "block";
    });

    pendaftaranDropdown.addEventListener("mouseout", function() {
        pendaftaranDropdown.style.display = "none";
    });

    const loginLink = document.getElementById("login-link");
    const loginDropdown = document.getElementById("login-dropdown");

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginDropdown.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('#login-link')) {
            if (loginDropdown.classList.contains('show')) {
                loginDropdown.classList.remove('show');
            }
        }
    });
});
