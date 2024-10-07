document.getElementById('searchReviews').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get the input value
    const inputValue = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.shop-item-wrapper');
    let found = false;
    products.forEach(product => {
        const title = product.getAttribute('data-title').toLowerCase();
        if (title.indexOf(inputValue) !== -1) {
            product.classList.remove('d-none');
            found = true;
        }
        else {
            product.classList.add('d-none');
        }
        const noResultsMessage = document.getElementById('noResults');
        if (found) {
            noResultsMessage.classList.add('d-none'); // Hide message
        } else {
            noResultsMessage.classList.remove('d-none'); // Show message
        }
    });
});
