
document.addEventListener('DOMContentLoaded', function() {
    const foodItems = document.querySelectorAll('.food-item');
    
    foodItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
});

// Trending Section - Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.trending-items-wrapper');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (wrapper && prevBtn && nextBtn) {
        const scrollAmount = 300;
        
        nextBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        // Auto-scroll effect (optional - remove if you don't want it)
        let autoScrollInterval = setInterval(() => {
           if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 50) {
                wrapper.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000); // Auto-scroll every 5 seconds
        
        // Pause auto-scroll on hover
        wrapper.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });
        
        wrapper.addEventListener('mouseleave', () => {
            autoScrollInterval = setInterval(() => {
                if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 50) {
                    wrapper.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 3000);
        });
    }
    
    // Add shimmer effect to rank badges
    const ranks = document.querySelectorAll('.trending-rank');
    ranks.forEach(rank => {
        setInterval(() => {
            rank.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                rank.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }, 3000);
    });
});