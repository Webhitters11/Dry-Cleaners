// Function to toggle the menu
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Close the menu if clicked outside of it
document.addEventListener("click", function(event) {
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.querySelector(".menu-toggle");
    
    // Check if the click is outside the navMenu or the menuToggle (hamburger icon)
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const videoPopup = document.querySelector(".video-popup");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.querySelector("#welcomeVideo");

    if (!video || !videoPopup || !closeBtn) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Check if the video has already been played
    if (localStorage.getItem("videoPlayed") === "true") {
        videoPopup.classList.add("hidden"); // Hide the video popup if already played
        return; // Do not show the video again
    }

    // Show the popup when the page loads
    videoPopup.classList.remove("hidden");

    // Ensure video plays when loaded
    video.addEventListener("loadeddata", function () {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    });

    // Add a flag to check if the video has already ended or the close button was clicked
    let isRedirecting = false;

    // When video ends, fade out and redirect
    video.addEventListener("ended", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        console.log("Video finished, fading out...");
        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600); // Matches the CSS transition time
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        if (isRedirecting) return;  // Prevent multiple redirects

        videoPopup.classList.add("hidden");

        // Set the flag in localStorage to indicate the video has been played
        localStorage.setItem("videoPlayed", "true");

        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after fade-out
        }, 600);
    });
});


// Pricing

    document.addEventListener("DOMContentLoaded", function () {
        let plans = document.querySelectorAll(".pricing-card");

        plans.forEach(plan => {
            plan.addEventListener("click", function () {
                // Remove 'selected' class from all plans
                plans.forEach(p => {
                    p.classList.remove("selected");
                });

                // Add 'selected' class to the clicked plan
                this.classList.add("selected");
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");
    
        if (!counters.length) return; // Prevents errors if elements are not found
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let counter = entry.target;
                    let targetValue = parseInt(counter.getAttribute("data-target"), 10);
                    let duration = 2000; // 2 seconds
                    let startTime = null;
    
                    function updateCounter(timestamp) {
                        if (!startTime) startTime = timestamp;
                        let progress = timestamp - startTime;
                        let currentValue = Math.min(Math.floor((progress / duration) * targetValue), targetValue);
                        counter.textContent = currentValue;
    
                        if (progress < duration) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = targetValue;
                        }
                    }
    
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(counter); // Stop observing once animation starts
                }
            });
        }, { threshold: 0.5 }); // Trigger when at least 50% of the element is visible
    
        counters.forEach(counter => {
            observer.observe(counter);
        });
    });
    


window.onload = function () {
    let slideIndex = 0;
    const slider = document.getElementById("testimonialSlider");
    const slides = document.querySelectorAll(".testimonial-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const totalSlides = slides.length;

    function moveSlide(direction) {
        const slideWidth = slides[0].offsetWidth + 20; // Adjust for gap

        slideIndex += direction;

        // Loop the testimonials (Infinite Scroll Effect)
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1; // Move to last testimonial
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0; // Move back to the first testimonial
        }

        const offset = -slideIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(() => moveSlide(1), 3000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => moveSlide(1), 3000);
    }

    // Event listeners for buttons
    prevBtn.addEventListener("click", function () {
        moveSlide(-1);
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", function () {
        moveSlide(1);
        resetAutoSlide();
    });

    // Ensure the slider starts from position 0
    moveSlide(0);
};

//Navbar
function navigateTo(page) {
    window.location.href = page;
}
