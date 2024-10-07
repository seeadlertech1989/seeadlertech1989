document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL
    const currentUrl = window.location.pathname;

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Iterate through the links and set the "active" class
    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active'); // Add "active" class
        } else {
            link.classList.remove('active'); // Remove "active" class if not matched
        }
    });
});
