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
    
    var schedulingLinks = document.querySelectorAll(".scheduling-link");
    schedulingLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var patientInfo = this.closest('.patient-card').querySelector('.patient-info').innerHTML;
            schedulingContent.innerHTML = `
                <div class="patient-card">
                    <div class="patient-info">
                        ${patientInfo}
                        <p>Dokter Spesialis : Umum</p>
                    </div>
                    <div class="patient-status">
                        <button class="Dokter-button">Dokter</button>
                        <button class="Jadwal-button">Jadwal</button>
                        <button class="Ruangan-button">Ruangan</button>
                    </div>
                </div>
                <div class="button-group">
                    <button class="Jadwalkan-button">Jadwalkan</button>
                    <button class="Tutup-button">Tutup</button>
                </div>`
            ;
            schedulingModal.style.display = "block";

            var dokterButton = schedulingContent.querySelector(".Dokter-button");
            dokterButton.addEventListener("click", function () {
                doctorModal.style.display = "block";
                var doctorOptions = document.querySelectorAll(".doctor-option");
                doctorOptions.forEach(function (option) {
                    option.addEventListener("click", function () {
                        dokterButton.textContent = this.querySelector(".doctor-name").textContent;
                        doctorModal.style.display = "none";
                    });
                });
            });

            var jadwalButton = schedulingContent.querySelector(".Jadwal-button");
            jadwalButton.addEventListener("click", function () {
                jadwalModal.style.display = "block";
                var jadwalOptions = document.querySelectorAll("#Jadwal-modal .doctor-option");
                jadwalOptions.forEach(function (option) {
                    option.addEventListener("click", function () {
                        jadwalButton.textContent = this.querySelector(".doctor-name").textContent;
                        jadwalModal.style.display = "none";
                    });
                });
            });

            var ruanganButton = schedulingContent.querySelector(".Ruangan-button");
            ruanganButton.addEventListener("click", function () {
                ruanganModal.style.display = "block";
                var ruanganOptions = document.querySelectorAll("#Ruangan-modal .doctor-option");
                ruanganOptions.forEach(function (option) {
                    option.addEventListener("click", function () {
                        ruanganButton.textContent = this.querySelector(".doctor-name").textContent;
                        ruanganModal.style.display = "none";
                    });
                });
            });

            var jadwalkanButton = schedulingContent.querySelector(".Jadwalkan-button");
            jadwalkanButton.addEventListener("click", function () {
                alert("Penjadwalan berhasil!");
                window.location.href = "dashboard.html";
            });

            var tutupButton = schedulingContent.querySelector(".Tutup-button");
            tutupButton.addEventListener("click", function () {
                schedulingModal.style.display = "none";
            });
        });
    });

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