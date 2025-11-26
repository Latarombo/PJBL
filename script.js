// Thumbnail Image Switcher
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.src;
        });
    });
});

// Size Selection
document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-btn');

    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Star Rating Input
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-input i');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });

        star.addEventListener('click', function() {
            selectedRating = index + 1;
            highlightStars(selectedRating);
        });
    });

    const starContainer = document.querySelector('.star-input');
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

// Review Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.querySelector('.review-form');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const stars = document.querySelectorAll('.star-input i.active');
            const rating = stars.length;
            
            reviewForm.reset();
            
            const allStars = document.querySelectorAll('.star-input i');
            allStars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
        });
    }
});

// Review Like Button
document.addEventListener('DOMContentLoaded', function() {
    const reviewItems = document.querySelectorAll('.review-item');
    
    reviewItems.forEach(reviewItem => {
        const likeButtons = reviewItem.querySelectorAll('.review-btn');
        
        likeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const buttonText = this.textContent.trim();
                
                if (buttonText.includes('Suka')) {
                    const icon = this.querySelector('i');
                    
                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        
                        const countMatch = buttonText.match(/\((\d+)\)/);
                        if (countMatch) {
                            const currentCount = parseInt(countMatch[1]);
                            const newCount = currentCount + 1;
                            this.innerHTML = `<i class="fas fa-thumbs-up"></i> Suka (${newCount})`;
                        }
                        this.style.color = '#8B1A1A';
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        
                        const countMatch = buttonText.match(/\((\d+)\)/);
                        if (countMatch) {
                            const currentCount = parseInt(countMatch[1]);
                            const newCount = Math.max(0, currentCount - 1);
                            this.innerHTML = `<i class="far fa-thumbs-up"></i> Suka (${newCount})`;
                        }
                        this.style.color = '#666';
                    }
                }
            });
        });
    });
});

// Chat Seller Button
document.addEventListener('DOMContentLoaded', function() {
    const chatBtn = document.querySelector('.btn-chat');
    
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            const phoneNumber = '6281234623303';
            const productName = document.querySelector('.product-details h1').textContent;
            const message = encodeURIComponent(`Halo, saya tertarik dengan produk ${productName}`);
            
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }
});

// Add to Cart Button
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.btn-add-cart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-btn.active');
            
            if (selectedSize) {
                // Add to cart action here
            }
        });
    }
});

// Product Card Click
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // Navigate to product detail page
        });
    });
});

// Smooth Scroll
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