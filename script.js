// ========== THUMBNAIL IMAGE SWITCHER ==========
document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail-list img');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Hapus class active dari semua thumbnail
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      
      // Tambahkan class active ke thumbnail yang diklik
      this.classList.add('active');
      
      // Ganti gambar utama dengan gambar thumbnail yang diklik
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });
  });
});

// ========== SIZE BUTTON SELECTOR ==========
document.addEventListener('DOMContentLoaded', function() {
  const sizeButtons = document.querySelectorAll('.size-btn');

  sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Hapus class active dari semua button
      sizeButtons.forEach(btn => btn.classList.remove('active'));
      
      // Tambahkan class active ke button yang diklik
      this.classList.add('active');
      
      console.log('Ukuran dipilih:', this.textContent);
    });
  });
});

// ========== STAR RATING INPUT ==========
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star-rating-input i');
  let selectedRating = 0;

  stars.forEach((star, index) => {
    // Hover effect
    star.addEventListener('mouseenter', function() {
      highlightStars(index + 1);
    });

    // Click to select rating
    star.addEventListener('click', function() {
      selectedRating = index + 1;
      highlightStars(selectedRating);
      console.log('Rating dipilih:', selectedRating);
    });
  });

  // Reset on mouse leave
  const starContainer = document.querySelector('.star-rating-input');
  if (starContainer) {
    starContainer.addEventListener('mouseleave', function() {
      highlightStars(selectedRating);
    });
  }

  function highlightStars(count) {
    stars.forEach((star, index) => {
      if (index < count) {
        star.classList.remove('far');
        star.classList.add('fas', 'active');
      } else {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
      }
    });
  }
});

// ========== REVIEW FORM SUBMISSION ==========
document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.querySelector('.review-form');
  
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const rating = document.querySelectorAll('.star-rating-input i.active').length;
      const reviewText = document.getElementById('reviewText').value;
      
      if (rating === 0) {
        alert('Silakan pilih rating terlebih dahulu!');
        return;
      }
      
      if (reviewText.trim() === '') {
        alert('Silakan tulis review Anda!');
        return;
      }
      
      // Simulasi submit
      console.log('Review submitted:', {
        rating: rating,
        text: reviewText
      });
      
      alert('Terima kasih atas review Anda!');
      reviewForm.reset();
      
      // Reset stars
      const stars = document.querySelectorAll('.star-rating-input i');
      stars.forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
      });
    });
  }
});

// ========== LOAD MORE PRODUCTS ==========
document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      const hiddenProducts = document.querySelectorAll('.hidden-product');
      
      hiddenProducts.forEach(product => {
        product.classList.remove('hidden-product');
      });
      
      // Sembunyikan button setelah semua produk ditampilkan
      this.style.display = 'none';
    });
  }
});

// ========== REVIEW ACTIONS (LIKE & REPLY) ==========
document.addEventListener('DOMContentLoaded', function() {
  const likeButtons = document.querySelectorAll('.review-btn');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      
      if (buttonText.includes('Suka')) {
        // Simulasi like
        const likeCount = this.querySelector('i').nextSibling.textContent.match(/\d+/);
        if (likeCount) {
          const newCount = parseInt(likeCount[0]) + 1;
          this.innerHTML = `<i class="fas fa-thumbs-up"></i> Suka (${newCount})`;
          this.style.color = '#7b1a1a';
        }
      } else if (buttonText.includes('Balas')) {
        // Simulasi reply
        console.log('Reply button clicked');
        alert('Fitur reply akan segera hadir!');
      }
    });
  });
});

// ========== CHAT SELLER BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
  const chatBtn = document.querySelector('.btn-chat');
  
  if (chatBtn) {
    chatBtn.addEventListener('click', function() {
      console.log('Chat button clicked');
      alert('Menghubungkan ke WhatsApp penjual...');
      // Di implementasi nyata, bisa redirect ke WhatsApp
      // window.open('https://wa.me/6281234567890', '_blank');
    });
  }
});

// ========== ADD TO CART BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
  const cartBtn = document.querySelector('.btn-cart');
  
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      const selectedSize = document.querySelector('.size-btn.active');
      
      if (!selectedSize) {
        alert('Silakan pilih ukuran terlebih dahulu!');
        return;
      }
      
      const productName = document.querySelector('.product-info h1').textContent;
      const size = selectedSize.textContent;
      
      console.log('Added to cart:', {
        product: productName,
        size: size
      });
      
      alert(`Produk "${productName}" ukuran ${size} berhasil ditambahkan ke keranjang!`);
    });
  }
});

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ========== PRODUCT CARD CLICK ==========
document.addEventListener('DOMContentLoaded', function() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('click', function() {
      console.log('Product card clicked:', this.querySelector('h3').textContent);
      // Di implementasi nyata, redirect ke halaman detail produk
      // window.location.href = 'detail-produk.html?id=123';
    });
  });
});

console.log('Detail product page JavaScript loaded successfully!');