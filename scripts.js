document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen-elemen yang diperlukan
    const pendaftaranLink = document.getElementById("pendaftaran-link");
    const modal = document.getElementById("notification-modal", "ctabutton");
    const okButton = document.querySelector(".ok-button");
    const loginLink = document.getElementById("login-link");
    const loginDropdown = document.getElementById("login-dropdown");
    const adminLoginLink = document.getElementById("admin-login-link");
    const adminLoginForm = document.getElementById("admin-login-form");

    // Event untuk membuka modal pemberitahuan saat pendaftaran di-klik
    pendaftaranLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    ctabutton.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });


    // Event untuk menutup modal saat tombol OK di-klik
    okButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Event untuk menutup modal saat pengguna meng-klik di luar modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Event untuk menampilkan/menghilangkan dropdown login
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginDropdown.classList.toggle("show");
    });

    // Event untuk menutup dropdown login saat meng-klik di luar tombol login
    window.addEventListener("click", function(event) {
        if (!event.target.closest('.login-button')) {
            if (loginDropdown.classList.contains('show')) {
                loginDropdown.classList.remove('show');
            }
        }
    });

    // Event untuk menampilkan form login admin saat admin-login-link di-klik
    adminLoginLink.addEventListener("click", function(event) {
        event.preventDefault();
        adminLoginForm.style.display = "block";
    });

    // Event untuk menutup form login admin saat meng-klik di luar form
    window.addEventListener("click", function(event) {
        if (event.target === adminLoginForm) {
            adminLoginForm.style.display = "none";
        }
    });

    // Event untuk mengarahkan ke dashboard.html saat form login admin di-submit
    document.querySelector("#admin-login-form form").addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "dashboard.html";
    });
});
