document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-pendaftaran');
    const btnDaftar = document.getElementById('btn-daftar');
    const output = document.getElementById('output');
    const notificationCount = document.querySelector('.notification span');

    btnDaftar.addEventListener('click', function() {
        const namaPasien = form['nama-pasien'].value;
        const nomorTelepon = form['nomor-telepon'].value;
        const usia = form['usia'].value;
        const alamat = form['alamat'].value;
        const riwayatPenyakit = form['riwayat-penyakit'].value;
        const keluhan = form['keluhan'].value;
        const pilihDokter = form['pilih-dokter'].value;

        const dokterText = form['pilih-dokter'].options[form['pilih-dokter'].selectedIndex].text;

        output.innerHTML = `
            <h3>Data Pasien</h3>
            <p><strong>Nama Pasien:</strong> ${namaPasien}</p>
            <p><strong>Nomor Telepon:</strong> ${nomorTelepon}</p>
            <p><strong>Usia:</strong> ${usia}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Riwayat Penyakit:</strong> ${riwayatPenyakit}</p>
            <p><strong>Keluhan:</strong> ${keluhan}</p>
            <p><strong>Pilih Dokter:</strong> ${dokterText}</p>
            <button type="button" id="btn-konfirmasi" class="btn-konfirmasi">Konfirmasi</button>
        `;

        document.getElementById('btn-konfirmasi').addEventListener('click', function() {
            alert('Data telah dikonfirmasi.');
            // Simpan data ke localStorage
            localStorage.setItem('namaPasien', namaPasien);
            localStorage.setItem('nomorTelepon', nomorTelepon);
            localStorage.setItem('usia', usia);
            localStorage.setItem('alamat', alamat);
            localStorage.setItem('riwayatPenyakit', riwayatPenyakit);
            localStorage.setItem('keluhan', keluhan); // Simpan keluhan ke localStorage
            localStorage.setItem('pilihDokter', dokterText); // Simpan pilihDokter ke localStorage

            // Perbarui notifikasi
            let count = parseInt(notificationCount.innerText);
            count++;
            notificationCount.innerText = count;
            notificationCount.style.display = 'inline'; // Pastikan notifikasi terlihat

            // Arahkan ke halaman pasien lama
            window.location.href = 'Pasien_Baru.html';
        });
    });
});
