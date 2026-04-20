// DATA SISWA X TJKT 1
const siswaTJKT1 = [
    "ALLISA NURAINI SRI SETYA", "APIF SEPTIAN", "AYUDIA RABAWI", "BAGUS NURMA SAPUTRA",
    "BAHRIYATUL RIZQI", "BAIZA DARA AMEERA", "DAYAT TULLOH", "DENIS",
    "EGA ZAIN MUSYAFFA", "FADHILAH MAULIDAH", "FIKIH ALANSYAH", "HANES SUSWITA SAFITRI",
    "ICA LESTARI", "ILHAM NASIKHUDIN", "IMANUEL ABIHU", "INDAH HERLIANA PRATIWI",
    "INTAN SAFIKA DEWI", "JOSHUA KEN KIRGYZA", "JULIO CHRISTIANO F YARANGGA", "KESHA MAHARANI",
    "LINDA AGUSTIN ARHAYU", "M. FARHAN AL FALAH", "MAURIN DURUN NAFIS", "MELISA",
    "NOVAL ADHIKA RAHADIYAN", "NURUL AMIYAH", "RAFA NAZARULLOH", "REVITA NAISILA AGUSTINA",
    "RIDWAN MAULANA", "RIFKI RAMADHAN NASUTION", "RIZKI RAMANDIKA", "SELA",
    "SITI ANIDA FASYA", "SITI FAUZIAH NURUL HASANAH", "SITI ISRO ASMA", "SITI MIRA", "SITI MITA YUNITA"
];

// DATA SISWA X TJKT 2
const siswaTJKT2 = [
    "ALFIANA KASMA PUTRI", "ALMA AFRILIA", "ALYA NOOR HAMIDAH", "ANASTIAR NASUHA",
    "AULIA SEPTI ASYIFA", "BAYU ARGA PRATAMA", "CALVIN HENRIK ERARI", "CHERYL AQILLA",
    "DEA NURU AL'HAYU", "DESI NUR RAMDANI", "DINDA NUR SABILLA", "ENDRA ALVINO PRIBADI",
    "EVAN GIVANO", "FAHRIZ PRATAMA RAMADHAN", "FATIKA SETYANINGRUM", "HAYATUDIN AL-HIJAZI",
    "HIKMAH AMBARWATI", "KENIA RAHMA DANIYA", "LAILA MASARROH", "MOHAMMAD FACHRIS AMRI",
    "MUHAMAD REZQY RAMADHAN", "MUHAMMAD AL IMRON", "MUHAMMAD IZAM SYAWAL MUTAQIN", "MUHJIB AL MUJHARI",
    "PUSPITA HARUM SARI", "QWINAYA ATASYA BIYAN", "RIZKY SETIAWAN", "SAIROH DEWI",
    "SENDI AULIANA", "SUIHERMAN", "SUSANTI", "SYIFA META RAFA MILANDA",
    "TEDDY ELANG FIRMANSYAH DATU", "TESALONIKA SIMBOLON", "VEXIA HABSAH PRABAWATI", "YOHAN ADITYA CORNELIUS"
];

// FUNGSI NAVIGASI
function bukaHalaman(idTarget) {
    // Sembunyikan semua section
    document.getElementById('tjkt1').style.display = 'none';
    document.getElementById('tjkt2').style.display = 'none';
    document.getElementById('pengaduan').style.display = 'none';

    // Tampilkan yang dipilih
    document.getElementById(idTarget).style.display = 'block';

    // Isi tabel jika halaman kelas dibuka
    if (idTarget === 'tjkt1') renderSiswa('list-siswa-1', siswaTJKT1);
    if (idTarget === 'tjkt2') renderSiswa('list-siswa-2', siswaTJKT2);
}

// FUNGSI ISI TABEL SISWA
function renderSiswa(idTable, daftarSiswa) {
    const container = document.getElementById(idTable);
    container.innerHTML = ""; // Bersihkan dulu agar tidak menumpuk
    
    daftarSiswa.forEach((nama, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${nama}</td>
            <td>
                <select>
                    <option>Hadir</option>
                    <option>Izin</option>
                    <option>Sakit</option>
                    <option>Alpa</option>
                </select>
            </td>
        </tr>`;
        container.innerHTML += row;
    });
}

// FUNGSI HITUNG KAS
function hitungKas(kelas) {
    const masuk = document.getElementById(`in${kelas}`).value || 0;
    const keluar = document.getElementById(`out${kelas}`).value || 0;
    const sisa = parseInt(masuk) - parseInt(keluar);
    document.getElementById(`sisa${kelas}`).innerText = "Rp " + sisa.toLocaleString('id-ID');
}

// FUNGSI KIRIM LAPORAN
function kirimLaporan(event) {
    event.preventDefault();
    const jenis = document.getElementById('jenisLaporan').value;
    const detail = document.getElementById('detailLaporan').value;
    
    if(detail.trim() === "") {
        alert("Mohon isi detail laporan terlebih dahulu!");
        return;
    }
    
    alert("Laporan " + jenis + " berhasil dikirim! Terima kasih atas keberaniannya melapor.");
    document.getElementById('detailLaporan').value = ""; // Reset text
}

// JALANKAN TJKT 1 SAAT PERTAMA BUKA
window.onload = function() {
    bukaHalaman('tjkt1');
};