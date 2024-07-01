document.addEventListener('DOMContentLoaded', function() {
    const dataOutput = document.getElementById('data-output');
    const notificationCount = document.querySelector('.notification span');
    const notificationDropdown = document.getElementById('notification-dropdown');
    const notificationToggle = document.getElementById('notification-toggle');
    const inputKeluhan = document.getElementById('inputText');
    const pilihDokter = document.getElementById('pilih-dokter');
    const btnDaftar = document.getElementById('btn-daftar');
    const btnKonfirmasi = document.getElementById('btn-konfirmasi');
    const buttonDaftarLagi = document.querySelector('.btn-daftarlagi');
    const borderKeluhan = document.querySelector('.border-keluhan');

    
    // Menambahkan notifikasi (contoh, bisa dihapus untuk produksi)
    const addNotification = (notification) => {
        let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        notifications.push(notification);
        localStorage.setItem('notifications', JSON.stringify(notifications));
        showNotifications();
    };

    // Menampilkan notifikasi dari localStorage saat halaman dimuat
    const showNotifications = () => {
        const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        notificationCount.textContent = notifications.length;
        notificationCount.style.display = notifications.length > 0 ? 'inline' : 'none';
        notificationDropdown.innerHTML = '';
        notifications.forEach(notification => {
            const notificationItem = document.createElement('div');
            notificationItem.classList.add('notification-item');
            notificationItem.textContent = notification;
            notificationDropdown.appendChild(notificationItem);
        });
    };

    // Menghapus semua notifikasi
    const clearNotifications = () => {
        localStorage.removeItem('notifications');
        notificationCount.textContent = '0';
        notificationCount.style.display = 'none';
        notificationDropdown.innerHTML = '';
    };

    // Handler untuk menampilkan atau menyembunyikan dropdown notifikasi
    notificationToggle.addEventListener('click', function() {
        notificationDropdown.classList.toggle('show');
    });

    // Handler saat tombol Daftar ditekan
    btnDaftar.addEventListener('click', function() {
        if (!localStorage.getItem('keluhan')) {
            localStorage.setItem('keluhan', inputKeluhan.value);
        }
        if (!localStorage.getItem('pilihDokter')) {
            localStorage.setItem('pilihDokter', pilihDokter.options[pilihDokter.selectedIndex].text);
        }
        btnKonfirmasi.style.display = 'inline';
    });

    // Handler saat tombol Konfirmasi ditekan
    btnKonfirmasi.addEventListener('click', function() {
        const namaPasien = localStorage.getItem('namaPasien');
        const nomorTelepon = localStorage.getItem('nomorTelepon');
        const usia = localStorage.getItem('usia');
        const alamat = localStorage.getItem('alamat');
        const riwayatPenyakit = localStorage.getItem('riwayatPenyakit');
        const keluhanValue = localStorage.getItem('keluhan'); // Ambil keluhan dari localStorage
        const dokterText = localStorage.getItem('pilihDokter'); // Ambil pilihDokter dari localStorage

        dataOutput.innerHTML = `
            <h3>Data Pasien</h3>
            <p><strong>Nama Pasien:</strong> ${namaPasien}</p>
            <p><strong>Nomor Telepon:</strong> ${nomorTelepon}</p>
            <p><strong>Usia:</strong> ${usia}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Riwayat Penyakit:</strong> ${riwayatPenyakit}</p>
            <p><strong>Keluhan:</strong> ${keluhanValue}</p>
            <p><strong>Pilih Dokter:</strong> ${dokterText}</p>
        `;

        alert('Data telah diubah.');
        addNotification('Data telah diubah.');
    });

    // Mengisi data pasien dari localStorage jika ada
    const fillDataPasien = () => {
        const namaPasien = localStorage.getItem('namaPasien');
        const nomorTelepon = localStorage.getItem('nomorTelepon');
        const usia = localStorage.getItem('usia');
        const alamat = localStorage.getItem('alamat');
        const riwayatPenyakit = localStorage.getItem('riwayatPenyakit');
        const keluhanSaved = localStorage.getItem('keluhan');
        const dokterSaved = localStorage.getItem('pilihDokter');

        if (keluhanSaved) {
            dataOutput.innerHTML = `
                <h3>Data Pasien</h3>
                <p><strong>Nama Pasien:</strong> ${namaPasien}</p>
                <p><strong>Nomor Telepon:</strong> ${nomorTelepon}</p>
                <p><strong>Usia:</strong> ${usia}</p>
                <p><strong>Alamat:</strong> ${alamat}</p>
                <p><strong>Riwayat Penyakit:</strong> ${riwayatPenyakit}</p>
                <p><strong>Keluhan:</strong> ${keluhanSaved}</p>
                <p><strong>Pilih Dokter:</strong> ${dokterSaved}</p>
            `;
        }
    };

    fillDataPasien();
    showNotifications();

    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'button-kembali') {
            window.location.href = 'pasien_baru_form.html';
        }
    });

    buttonDaftarLagi.addEventListener('click', function() {
        console.log('Button clicked');
        borderKeluhan.style.display = 'block';
        console.log('Border keluhan should be visible now');
    });

    notificationToggle.addEventListener('click', function() {
        notificationDropdown.classList.remove('show');
        clearNotifications();
    });
});
