// JavaScript to redirect mobile users to the mobile version of the website
(function() {
    // Check the width of the user's screen
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Set the threshold width for mobile devices (e.g., 768px for tablets and smaller screens)
    var mobileWidthThreshold = 768;

    // Define the mobile version URL (relative path to the new HTML file)
    var mobileUrl = "index_mobile.html";

    // Check if the user is already on the mobile page
    var currentPage = window.location.pathname;

    // If the screen width is less than or equal to the threshold and the user is not already on the mobile page
    if (screenWidth <= mobileWidthThreshold && !currentPage.includes(mobileUrl)) {
        // Redirect to the mobile version of the site
        window.location.href = mobileUrl;
    }
})();
