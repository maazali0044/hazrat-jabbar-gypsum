// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sample Project Data - UPDATED FOR GYPSUM
const projects = [
    {
        title: "Modern False Ceiling",
        category: "ceiling",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Living room gypsum ceiling with LED lighting"
    },
    {
        title: "Wall Crack Repair",
        category: "wall",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Large wall crack repaired perfectly"
    },
    {
        title: "Decorative Ceiling",
        category: "decorative",
        image: "https://images.unsplash.com/photo-1618220179428-22790b4615e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Ornamental gypsum ceiling with moldings"
    },
    {
        title: "Room Partition",
        category: "partition",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Gypsum partition wall with soundproofing"
    },
    {
        title: "Kitchen Ceiling",
        category: "ceiling",
        image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Moisture-resistant gypsum ceiling"
    },
    {
        title: "Wall Niches",
        category: "decorative",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Decorative gypsum wall niches with lighting"
    }
];

// Sample Video Data - UPDATED FOR GYPSUM
const videos = [
    {
        title: "Gypsum Ceiling Installation",
        description: "Step-by-step ceiling installation process",
        videoId: "dQw4w9WgXcQ" // Replace with actual YouTube IDs
    },
    {
        title: "Wall Repair Tips",
        description: "How we fix large wall cracks",
        videoId: "dQw4w9WgXcQ"
    },
    {
        title: "Decorative Gypsum Work",
        description: "Creating beautiful ceiling designs",
        videoId: "dQw4w9WgXcQ"
    }
];

// Load Projects
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `project-item ${project.category}`;
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

// Load Videos
const videoGrid = document.getElementById('video-grid');
if (videoGrid) {
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.videoId}" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;
        videoGrid.appendChild(videoCard);
    });
}

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-item');
        
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We\'ll contact you within 30 minutes.');
        contactForm.reset();
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        answer.classList.toggle('show');
        
        // Close other FAQs
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            }
        });
    });
});

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loading);
    
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.remove();
        }, 500);
    }, 500);
});

// Counter Animation for Stats
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.innerText);
                let count = 0;
                const updateCounter = setInterval(() => {
                    count += Math.ceil(target / 50);
                    if (count > target) {
                        counter.innerText = target + '+';
                        clearInterval(updateCounter);
                    } else {
                        counter.innerText = count + '+';
                    }
                }, 30);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.about');
if (statsSection) {
    observer.observe(statsSection);
}

// Update business info
function updateBusinessInfo() {
    // Phone numbers
    const phoneLinks = document.querySelectorAll('.phone-link, #phone-display, .info-item a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = 'tel:+15551234567'; // CHANGE THIS
        if (link.id !== 'phone-display') {
            link.textContent = '+1 (555) 123-4567'; // CHANGE THIS
        } else {
            link.textContent = '+1 (555) 123-4567'; // CHANGE THIS
        }
    });

    // WhatsApp
    const whatsappLinks = document.querySelectorAll('.whatsapp-float, .info-item a[href^="https://wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = 'https://wa.me/15551234567'; // CHANGE THIS
    });

    // Email
    const emailLinks = document.querySelectorAll('#email-display, .info-item a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = 'mailto:gypsum@abdalikhan.com'; // CHANGE THIS
        link.textContent = 'gypsum@abdalikhan.com'; // CHANGE THIS
    });

    // Service area
    const serviceArea = document.getElementById('service-area');
    if (serviceArea) {
        serviceArea.textContent = 'Springfield, Oakville, Riverside, Pleasantville'; // CHANGE THIS
    }
}

document.addEventListener('DOMContentLoaded', updateBusinessInfo);