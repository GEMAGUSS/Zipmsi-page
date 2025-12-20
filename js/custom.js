        // --- 1. SLIDESHOW OTOMATIS ---
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slide-item");
            
            // Sembunyikan semua slide
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            
            // Tampilkan slide saat ini
            if(slides[slideIndex-1]) {
                slides[slideIndex-1].style.display = "block";  
            }
            
            // Ganti slide setiap 5 detik (5000 ms)
            setTimeout(showSlides, 5000); 
        }

        // Fungsi manual (jika tombol panah diklik)
        function plusSlides(n) {
            slideIndex += n;
            let slides = document.getElementsByClassName("slide-item");
            if (slideIndex > slides.length) {slideIndex = 1}
            if (slideIndex < 1) {slideIndex = slides.length}
             
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            if(slides[slideIndex-1]) {
                slides[slideIndex-1].style.display = "block";  
            }
        }
        
        // --- 2. NAVBAR OTOMATIS SAAT DI SCROLL ---
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            const header = document.getElementById("mainHeader");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                // Tambahkan kelas 'scrolled' saat di-scroll ke bawah
                header.classList.add("scrolled");
            } else {
                // Hapus kelas 'scrolled' saat kembali ke atas
                header.classList.remove("scrolled");
            }
        }