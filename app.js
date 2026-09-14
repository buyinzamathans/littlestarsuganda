// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Mobile Menu Toggle
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle the active class to slide the menu in/out
            navLinks.classList.toggle('nav-active');
            
            // Toggle a class on the button itself for potential 'X' animation styling
            mobileMenuBtn.classList.toggle('is-active');
        });
    }

    /* ==========================================================================
       2. Activities Tab Switching (Zero-Lag)
       ========================================================================== */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Only run if tabs exist on the current page
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove 'active' class from all buttons and content panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add 'active' class to the clicked button
                btn.classList.add('active');

                // Find the corresponding content pane using the data-target attribute
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                
                // Show the targeted content
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    /* ==========================================================================
       3. Smooth Scrolling for Anchor Links (Optional Enhancement)
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Only apply if it's an actual ID link on the same page
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open after clicking a link
                    if (navLinks.classList.contains('nav-active')) {
                        navLinks.classList.remove('nav-active');
                    }
                }
            }
        });
    });
});