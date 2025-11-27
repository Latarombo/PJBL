// ========== THUMBNAIL IMAGE SWITCHER ==========
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Change main image
                mainImage.src = this.src;
                mainImage.alt = this.alt;
            });
        });
    }
});

// ========== SIZE BUTTON SELECTOR ==========
document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-btn');

    if (sizeButtons.length > 0) {
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                sizeButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
            });
        });
    }
});

// ========== STAR RATING INPUT ==========
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-input i');
    const starContainer = document.querySelector('.star-input');
    let selectedRating = 0;

    if (stars.length > 0 && starContainer) {
        stars.forEach((star, index) => {
            // Hover effect
            star.addEventListener('mouseenter', function() {
                highlightStars(index + 1);
            });

            // Click to select rating
            star.addEventListener('click', function() {
                selectedRating = index + 1;
                highlightStars(selectedRating);
            });
        });

        // Reset on mouse leave
        starContainer.addEventListener('mouseleave', function() {
            highlightStars(selectedRating);
        });

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
    }
});

// ========== REVIEW FORM SUBMISSION ==========
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.querySelector('.review-form');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const stars = document.querySelectorAll('.star-input i.active');
            const rating = stars.length;
            const textarea = this.querySelector('textarea');
            
            // Reset form
            reviewForm.reset();
            
            // Reset stars
            const allStars = document.querySelectorAll('.star-input i');
            allStars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
        });
    }
});

// ========== REVIEW LIKE BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    const reviewBtns = document.querySelectorAll('.review-btn');
    
    reviewBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const buttonText = this.innerHTML;
            
            // Only handle like buttons
            if (buttonText.includes('Suka')) {
                const icon = this.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    // Like
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    
                    const match = buttonText.match(/\((\d+)\)/);
                    if (match) {
                        const count = parseInt(match[1]);
                        const newCount = count + 1;
                        this.innerHTML = `<i class="fas fa-thumbs-up"></i> Suka (${newCount})`;
                    }
                    this.style.color = '#8b1a1a';
                } else {
                    // Unlike
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    
                    const match = buttonText.match(/\((\d+)\)/);
                    if (match) {
                        const count = parseInt(match[1]);
                        const newCount = Math.max(0, count - 1);
                        this.innerHTML = `<i class="far fa-thumbs-up"></i> Suka (${newCount})`;
                    }
                    this.style.color = '#666';
                }
            }
        });
    });
});

// ========== CHAT SELLER BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    const chatBtn = document.querySelector('.btn-chat');
    
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            const phoneNumber = '6281234623303';
            const productName = document.querySelector('.product-details h1');
            const productTitle = productName ? productName.textContent : 'Produk';
            const message = encodeURIComponent(`Halo, saya tertarik dengan produk ${productTitle}`);
            
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }
});

// ========== ADD TO CART BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.btn-add-cart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-btn.active');
            
            if (selectedSize) {
                // Add to cart logic here
                const size = selectedSize.getAttribute('data-size');
            }
        });
    }
});

// ========== PRODUCT CARD CLICK ==========
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // Navigate to product detail page
            // window.location.href = 'detail-product.html';
        });
    });
});

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#') && href !== '#') {
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

// ========== LOAD MORE BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.querySelector('.btn-load-more');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Load more products logic here
        });
    }
});

console.log('Product detail page loaded successfully!');