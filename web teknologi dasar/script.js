// Fungsi sederhana untuk tombol "Bagikan"
document.querySelector('.btn-share').addEventListener('click', function() {
    alert('Link artikel telah disalin ke clipboard!');
});

// Efek scroll pada header
window.onscroll = function() {
    let header = document.querySelector("header");
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = "#160533";
    } else {
        header.style.backgroundColor = "#0b021d";
    }
};
function openNav() {
    console.log("Menu diklik!"); // Ini untuk ngetes di konsol muncul atau tidak
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
function cekHasil() {
    // Logika sederhana untuk memberikan feedback kepada pengguna
    const konfirmasi = confirm("Apakah kamu yakin ingin mengirim semua jawaban kuis ini?");
    if(konfirmasi) {
        alert("Terima kasih telah mengerjakan kuis! Skor kamu akan diperiksa oleh sistem/guru.");
        // Kamu bisa menambahkan logika penghitungan skor otomatis di sini jika mau
    }
}
function hitungSkorOtomatis() {
    let totalSkor = 0;
    
    // Hitung PG (10 soal x 5 poin)
    const pgQuestions = document.querySelectorAll('.pg-item');
    pgQuestions.forEach(q => {
        const correctRadio = q.querySelector('input[data-correct="true"]');
        if (correctRadio && correctRadio.checked) {
            totalSkor += 5;
        }
    });

    // Hitung Essay (5 soal x 10 poin)
    const essayQuestions = document.querySelectorAll('.essay-item');
    essayQuestions.forEach(q => {
        const input = q.querySelector('.essay-input').value.toLowerCase().trim();
        const keyword = q.querySelector('.essay-input').getAttribute('data-keyword');
        
        if (input.includes(keyword)) {
            totalSkor += 10;
        }
    });

    // Tampilkan Hasil
    const resultDiv = document.getElementById('result-display');
    const scoreText = document.getElementById('final-score');
    resultDiv.style.display = 'block';
    scoreText.innerText = totalSkor;
    
    window.scrollTo({ top: resultDiv.offsetTop - 100, behavior: 'smooth' });
}