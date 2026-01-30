// Navigation functionality for Eden Media Group

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            const isOpen = mobileMenu.classList.contains('active');

            // Update button icon
            const icon = mobileMenuButton.querySelector('svg use');
            if (icon) {
                icon.setAttribute('href', isOpen ? '#icon-x' : '#icon-menu');
            }
        });
    }

    // Dropdown menu toggle (desktop)
    const dropdownButton = document.getElementById('brands-dropdown-button');
    const dropdownMenu = document.getElementById('brands-dropdown-menu');

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('active');

            // Update chevron rotation
            const chevron = dropdownButton.querySelector('.dropdown-chevron');
            if (chevron) {
                chevron.style.transform = dropdownMenu.classList.contains('active')
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)';
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('active');
                const chevron = dropdownButton.querySelector('.dropdown-chevron');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    if (navbar) {
        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav-link-active');
        }

        // Special case for brands pages
        if (currentPage.startsWith('brand-') && href === 'brands.html') {
            link.classList.add('nav-link-active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
