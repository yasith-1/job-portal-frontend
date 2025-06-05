// Page navigation functionality
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update navbar active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// Show job detail page
function showJobDetail(jobId) {
    showPage('job-detail');
}

// // Form submission handlers
// document.getElementById('companyForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Show success message
//     const alertDiv = document.createElement('div');
//     alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
//     alertDiv.innerHTML = `
//                 <strong>Success!</strong> Company registration submitted successfully. We'll review your application and get back to you soon.
//                 <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//             `;

//     this.appendChild(alertDiv);
//     this.reset();

//     // Auto dismiss after 5 seconds
//     setTimeout(() => {
//         if (alertDiv.parentNode) {
//             alertDiv.remove();
//         }
//     }, 5000);
// });

// document.getElementById('jobForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Show success message
//     const alertDiv = document.createElement('div');
//     alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
//     alertDiv.innerHTML = `
//                 <strong>Success!</strong> Job posted successfully! It will be reviewed and published shortly.
//                 <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//             `;

//     this.appendChild(alertDiv);
//     this.reset();

//     // Auto dismiss after 5 seconds
//     setTimeout(() => {
//         if (alertDiv.parentNode) {
//             alertDiv.remove();
//         }
//     }, 5000);
// });

// // Search functionality
// function searchJobs() {
//     const searchInput = document.querySelector('#jobs .input-group input');
//     const searchTerm = searchInput.value.toLowerCase();
//     const jobCards = document.querySelectorAll('.job-card');

//     jobCards.forEach(card => {
//         const jobTitle = card.querySelector('.card-title').textContent.toLowerCase();
//         const company = card.querySelector('.text-muted').textContent.toLowerCase();

//         if (jobTitle.includes(searchTerm) || company.includes(searchTerm)) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// // Add search functionality to search button
// document.addEventListener('DOMContentLoaded', function () {
//     const searchBtn = document.querySelector('#jobs .btn-outline-primary');
//     if (searchBtn) {
//         searchBtn.addEventListener('click', searchJobs);
//     }

//     // Add enter key support for search
//     const searchInput = document.querySelector('#jobs .input-group input');
//     if (searchInput) {
//         searchInput.addEventListener('keypress', function (e) {
//             if (e.key === 'Enter') {
//                 searchJobs();
//             }
//         });
//     }
// });

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for job cards
document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', function () {
        // Add loading state
        const originalContent = this.innerHTML;
        this.innerHTML = `
                    <div class="card-body text-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p class="mt-2">Loading job details...</p>
                    </div>
                `;

        // Simulate loading delay
        setTimeout(() => {
            this.innerHTML = originalContent;
            showJobDetail();
        }, 1000);
    });
});

// Form validation enhancements
// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         const forms = document.getElementsByTagName('form');
//         Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

// Initialize tooltips and popovers
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add some interactive features
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        card.style.cursor = 'pointer';
    });
});