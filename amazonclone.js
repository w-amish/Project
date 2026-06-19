document.addEventListener("DOMContentLoaded", () => {
    
    let cartCount = 0;
    const cartTextElement = document.querySelector('.nav-item:nth-child(3) span');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            cartCount++;
            cartTextElement.textContent = `Cart (${cartCount})`;
            
            const originalText = e.target.textContent;
            e.target.textContent = 'Added ✓';
            e.target.style.backgroundColor = '#f7ca00';
            
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = '#ffd814';
            }, 1500);
        });
    });

    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-button');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            
            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', filterProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterProducts();
        }
        filterProducts(); 
    });

    const feedbackForm = document.querySelector('.feedback-form');

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const selectedRating = document.querySelector('input[name="rating"]:checked');
        const ratingValue = selectedRating ? selectedRating.value : 'No rating given';
        
        const name = feedbackForm.querySelector('input[type="text"]').value;
        const email = feedbackForm.querySelector('input[type="email"]').value;
        const feedbackMessage = feedbackForm.querySelector('textarea').value;

        if (!email || !feedbackMessage) {
            alert('Please provide at least your email and feedback message.');
            return;
        }

        console.log('--- New Feedback Submitted ---');
        console.log(`Name: ${name || 'Anonymous'}`);
        console.log(`Email: ${email}`);
        console.log(`Rating: ${ratingValue} Stars`);
        console.log(`Message: ${feedbackMessage}`);

        alert('Thank you! Your feedback has been recorded.');
        feedbackForm.reset(); 
    });

});