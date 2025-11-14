// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk jam real-time
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Update jam setiap detik
    setInterval(updateClock, 1000);
    updateClock(); // Panggil sekali untuk menginisialisasi
    
    // Navigasi antar halaman
    const navLinks = document.querySelectorAll('nav a');
    const pageSections = document.querySelectorAll('.page-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Sembunyikan semua section
            pageSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Tampilkan section yang dipilih
            document.getElementById(targetId).style.display = 'block';
            
            // Scroll ke atas halaman
            window.scrollTo(0, 0);
        });
    });
    
    // Form pendaftaran
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Formulir pendaftaran Anda telah berhasil dikirim.');
            this.reset();
        });
    }
    
    // Form kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
            this.reset();
        });
    }
    
    // Link "Baca Selengkapnya" untuk artikel
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Sembunyikan semua section
            pageSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Tampilkan artikel lengkap
            document.getElementById(targetId).style.display = 'block';
            
            // Scroll ke atas halaman
            window.scrollTo(0, 0);
        });
    });
    
    // Link judul artikel
    const articleTitleLinks = document.querySelectorAll('.article-preview h3 a');
    articleTitleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Sembunyikan semua section
            pageSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Tampilkan artikel lengkap
            document.getElementById(targetId).style.display = 'block';
            
            // Scroll ke atas halaman
            window.scrollTo(0, 0);
        });
    });
    
    // Link "Kembali ke Beranda"
    const backLinks = document.querySelectorAll('.back-link');
    backLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Sembunyikan semua section
            pageSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Tampilkan beranda
            document.getElementById('home').style.display = 'block';
            
            // Scroll ke atas halaman
            window.scrollTo(0, 0);
        });
    });
});