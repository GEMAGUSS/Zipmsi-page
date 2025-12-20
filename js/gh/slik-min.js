        function changeImage(newSrc) {
            document.getElementById('mainImage').src = newSrc;
            
            // Mengganti status aktif thumbnail
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumb => {
                thumb.classList.remove('active');
                if (thumb.getAttribute('onclick').includes(newSrc)) {
                    thumb.classList.add('active');
                }
            });
        }