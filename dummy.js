document.addEventListener("DOMContentLoaded", function () {
    var notificationModal = document.getElementById("notification-modal");
    var schedulingModal = document.getElementById("scheduling-modal");
    var doctorModal = document.getElementById("doctor-modal");
    var jadwalModal = document.getElementById("Jadwal-modal");
    var ruanganModal = document.getElementById("Ruangan-modal");
    var schedulingContent = document.getElementById("scheduling-content");
    var selengkapnyaLink = document.getElementById("selengkapnya-link");
    if (selengkapnyaLink) {
        selengkapnyaLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "datapasienlengkap.html";
        });
    }
    
    var rekapPasien = document.getElementById("rekap-pasien");
    rekapPasien.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "laporanrekappasien.html";
    });
    var ruangPasien = document.getElementById("ruang-pasien");
    ruangPasien.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "Ruangpasien.html";
    });
    var keuanganPage = document.getElementById("keuangan-page");
    keuanganPage.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "Keuangan.html";
    });
    var dokterPage = document.getElementById("dokter-page");
    dokterPage.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "Dokter.html";
    });
    var khalidPage = document.getElementById("khalid-page");
    khalidPage.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "detaildokter.html";
    });
    

    
    
    
    

    function closeModal() {
        notificationModal.style.display = "none";
        schedulingModal.style.display = "none";
        doctorModal.style.display = "none";
        jadwalModal.style.display = "none";
        ruanganModal.style.display = "none";
    }

    var closeButtons = document.querySelectorAll(".modal-close");
    closeButtons.forEach(function (button) {
        button.addEventListener("click", closeModal);
    });

    
    window.addEventListener("click", function (event) {
        if (event.target === notificationModal || 
            event.target === schedulingModal || 
            event.target === doctorModal || 
            event.target === jadwalModal || 
            event.target === ruanganModal) {
            closeModal();
        }
    });
    
    


    var dataPasien = document.getElementById("data-pasien");
    dataPasien.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.location.href = "DataPasien.html";
    });
    

    

    

    var closeDoctorModalButton = document.getElementById("close-doctor-modal");
    closeDoctorModalButton.addEventListener("click", function () {
        doctorModal.style.display = "none";
    });

    var closeJadwalModalButton = document.querySelector("#Jadwal-modal .modal-close");
    closeJadwalModalButton.addEventListener("click", function () {
        jadwalModal.style.display = "none";
    });

    var closeRuanganModalButton = document.querySelector("#Ruangan-modal .modal-close");
    closeRuanganModalButton.addEventListener("click", function () {
        ruanganModal.style.display = "none";
    });
    
});