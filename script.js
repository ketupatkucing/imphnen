// DOM Elements
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const featureCards = document.querySelectorAll(".card-feature");
const communityCards = document.querySelectorAll(".card-community");
const resourceCards = document.querySelectorAll(".card-resource");
const testimonyCards = document.querySelectorAll(".card-testimony");

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Close mobile menu when clicking a nav link
navItems.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Section animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      sectionObserver.unobserve(entry.target);

      // Animate cards within the section
      if (entry.target.id === "features") {
        animateCards(featureCards);
      } else if (entry.target.id === "community") {
        animateCards(communityCards);
      } else if (entry.target.id === "resources") {
        animateCards(resourceCards);
      } else if (entry.target.id === "testimony") {
        animateCards(testimonyCards);
      }
    }
  });
}, observerOptions);

// Observe each section
sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Function to animate cards with delay
function animateCards(cards) {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animated");
    }, 200 * index);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Initialize AOS library for additional animations
document.addEventListener("DOMContentLoaded", () => {
  // Add some animation to elements when they come into view
  const animateOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elements = document.querySelectorAll(
      ".card-feature, .card-community, .card-resource, .card-testimony"
    );

    elements.forEach((element) => {
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("animated");
      }
    });
  };

  // Run once on initial load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Initialize particle background if you want to add it
  // This is optional and can be added later
  createParticleBackground();
  createParticleBackground2();
  createParticleBackground3();
  createParticleBackground4();
  createParticleBackground5();
});

// Optional: Create a subtle particle background for the hero section
function createParticleBackground() {
  const hero = document.getElementById("hero");
  const particleContainer = document.createElement("div");
  particleContainer.className = "particles-container";

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Random size
    const size = Math.random() * 5 + 2;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random animation duration
    const duration = Math.random() * 20 + 10;

    // Set styles
    particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;

    particleContainer.appendChild(particle);
  }

  hero.insertBefore(particleContainer, hero.firstChild);
  // features.insertBefore(particleContainer, features.lastChild);

  // Add CSS for particles
  const style = document.createElement("style");
  style.textContent = `
        .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: 0;
            background-color : black;
        }
        .particle {
            position: absolute;
            background-color: #4C6EF5;
            border-radius: 50%;
            pointer-events: none;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-30px) translateX(15px);
            }
            50% {
                transform: translateY(-15px) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
    `;

  document.head.appendChild(style);
}

function createParticleBackground2() {
  const features = document.getElementById("features");
  const particleContainer = document.createElement("div");
  particleContainer.className = "particles-container";

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Random size
    const size = Math.random() * 5 + 2;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random animation duration
    const duration = Math.random() * 20 + 10;

    // Set styles
    particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;

    particleContainer.appendChild(particle);
  }

  features.insertBefore(particleContainer, features.firstChild);
  // features.appendChild(particleContainer);

  // Add CSS for particles
  const style = document.createElement("style");
  style.textContent = `
        .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: 0;
            background-color : transparent;
        }
        .particle {
            position: absolute;
            background-color: #4C6EF5;
            border-radius: 50%;
            pointer-events: none;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-30px) translateX(15px);
            }
            50% {
                transform: translateY(-15px) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
    `;

  document.head.appendChild(style);
}
function createParticleBackground3() {
  const community = document.getElementById("community");
  const particleContainer = document.createElement("div");
  particleContainer.className = "particles-container";

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Random size
    const size = Math.random() * 5 + 2;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random animation duration
    const duration = Math.random() * 20 + 10;

    // Set styles
    particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;

    particleContainer.appendChild(particle);
  }

  community.insertBefore(particleContainer, community.firstChild);
  // features.insertBefore(particleContainer, features.lastChild);

  // Add CSS for particles
  const style = document.createElement("style");
  style.textContent = `
        .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: 0;
            background-color : black;
        }
        .particle {
            position: absolute;
            background-color: #4C6EF5;
            border-radius: 50%;
            pointer-events: none;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-30px) translateX(15px);
            }
            50% {
                transform: translateY(-15px) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
    `;

  document.head.appendChild(style);
}
function createParticleBackground4() {
  const resources = document.getElementById("resources");
  const particleContainer = document.createElement("div");
  particleContainer.className = "particles-container";

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Random size
    const size = Math.random() * 5 + 2;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random animation duration
    const duration = Math.random() * 20 + 10;

    // Set styles
    particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;

    particleContainer.appendChild(particle);
  }

  resources.insertBefore(particleContainer, resources.firstChild);
  // features.insertBefore(particleContainer, features.lastChild);

  // Add CSS for particles
  const style = document.createElement("style");
  style.textContent = `
        .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: 0;
            background-color : black;
        }
        .particle {
            position: absolute;
            background-color: #4C6EF5;
            border-radius: 50%;
            pointer-events: none;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-30px) translateX(15px);
            }
            50% {
                transform: translateY(-15px) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
    `;

  document.head.appendChild(style);
}
function createParticleBackground5() {
  const testimony = document.getElementById("testimony");
  const particleContainer = document.createElement("div");
  particleContainer.className = "particles-container";

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Random size
    const size = Math.random() * 5 + 2;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random animation duration
    const duration = Math.random() * 20 + 10;

    // Set styles
    particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;

    particleContainer.appendChild(particle);
  }

  testimony.insertBefore(particleContainer, testimony.firstChild);
  // features.insertBefore(particleContainer, features.lastChild);

  // Add CSS for particles
  const style = document.createElement("style");
  style.textContent = `
        .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: 0;
            background-color : black;
        }
        .particle {
            position: absolute;
            background-color: #4C6EF5;
            border-radius: 50%;
            pointer-events: none;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-30px) translateX(15px);
            }
            50% {
                transform: translateY(-15px) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
    `;

  document.head.appendChild(style);
}
// Initialize counters for statistics if needed
function initCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000; // ms
    const steps = 100;
    const stepTime = duration / steps;
    const stepValue = target / steps;
    let currentValue = 0;
    let currentStep = 0;

    const updateCounter = () => {
      currentStep++;
      currentValue = Math.round(stepValue * currentStep);

      if (currentValue > target) {
        currentValue = target;
      }

      counter.textContent = currentValue.toLocaleString();

      if (currentStep < steps) {
        setTimeout(updateCounter, stepTime);
      }
    };

    // Start counter when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(counter);
  });
}

// Add scroll to top button
function addScrollToTopButton() {
  const button = document.createElement("button");
  button.className = "scroll-to-top";
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.appendChild(button);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  // Add styles for the button
  const style = document.createElement("style");
  style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            z-index: 900;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: var(--transition);
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .scroll-to-top:hover {
            background-color: var(--secondary-color);
            transform: translateY(-5px);
        }
    `;

  document.head.appendChild(style);
}
var featureSlideCounter = 0;
const items = document.querySelectorAll(".card-feature");
function featureNext() {
  if (featureSlideCounter < items.length) {
    items[featureSlideCounter].classList.toggle("hidden");
    items[featureSlideCounter].classList.remove("show");
    items[featureSlideCounter].style.animation = "slideRightHide 1s ease";
    featureSlideCounter++;

    if (featureSlideCounter < items.length) {
      items[featureSlideCounter].classList.toggle("show");
      items[featureSlideCounter].classList.remove("hidden");
      items[featureSlideCounter].style.animation = "slideRightShow 1s ease";
    } else {
      featureSlideCounter = 0;
      if (featureSlideCounter < items.length) {
        items[featureSlideCounter].classList.toggle("show");
        items[featureSlideCounter].classList.remove("hidden");
        items[featureSlideCounter].style.animation = "slideRightShow 1s ease";
      }
    }
  }
}
function featurePrev() {
  if (featureSlideCounter >= 0) {
    items[featureSlideCounter].classList.toggle("hidden");
    items[featureSlideCounter].classList.remove("show");
    items[featureSlideCounter].style.animation = "slideLeftHide 1s ease";
    featureSlideCounter--;

    if (featureSlideCounter >= 0) {
      items[featureSlideCounter].classList.toggle("show");
      items[featureSlideCounter].classList.remove("hidden");
      items[featureSlideCounter].style.animation = "slideLeftShow 1s ease";
    } else {
      featureSlideCounter = items.length - 1;
      if (featureSlideCounter < items.length) {
        items[featureSlideCounter].classList.toggle("show");
        items[featureSlideCounter].classList.remove("hidden");
        items[featureSlideCounter].style.animation = "slideLeftShow 1s ease";
      }
    }
  }
}
// 
var communitySlideCounter = 0;
const items2 = document.querySelectorAll(".card-community");
function communityNext() {
  if (communitySlideCounter < items2.length) {
    items2[communitySlideCounter].classList.toggle("hidden");
    items2[communitySlideCounter].classList.remove("show");
    items2[communitySlideCounter].style.animation = "slideRightHide2 1s ease";
    communitySlideCounter++;

    if (communitySlideCounter < items2.length) {
      items2[communitySlideCounter].classList.toggle("show");
      items2[communitySlideCounter].classList.remove("hidden");
      items2[communitySlideCounter].style.animation = "slideRightShow2 1s ease";
   
    } else {
      communitySlideCounter = 0;
      if (communitySlideCounter < items2.length) {
        items2[communitySlideCounter].classList.toggle("show");
        items2[communitySlideCounter].classList.remove("hidden");
        items2[communitySlideCounter].style.animation = "slideRightShow2 1s ease";
        
      }
    }
  }
}
function communityPrev() {
  if (communitySlideCounter >= 0) {
    items2[communitySlideCounter].classList.toggle("hidden");
    items2[communitySlideCounter].classList.remove("show");
    items2[communitySlideCounter].style.animation = "slideLeftHide2 1s ease";
    communitySlideCounter--;
  
  if (communitySlideCounter >= 0) {
    items2[communitySlideCounter].classList.toggle("show");
    items2[communitySlideCounter].classList.remove("hidden");
    items2[communitySlideCounter].style.animation = "slideLeftShow2 1s ease";
    
  } else {
    communitySlideCounter = items2.length-1;
    if (communitySlideCounter < items2.length) {
      items2[communitySlideCounter].classList.toggle("show");
      items2[communitySlideCounter].classList.remove("hidden");
      items2[communitySlideCounter].style.animation = "slideLeftShow2 1s ease";
      
    }
  }
}
}


// 

var resourceSlideCounter = 0;
const items3 = document.querySelectorAll(".card-resource");
function resourceNext() {
  if (resourceSlideCounter < items3.length) {
    items3[resourceSlideCounter].classList.toggle("hidden");
    items3[resourceSlideCounter].classList.remove("show");
    items3[resourceSlideCounter].style.animation = "slideRightHide 1s ease";
    resourceSlideCounter++;

    if (resourceSlideCounter < items3.length) {
      items3[resourceSlideCounter].classList.toggle("show");
      items3[resourceSlideCounter].classList.remove("hidden");
      items3[resourceSlideCounter].style.animation = "slideRightShow 1s ease";
   
    } else {
      resourceSlideCounter = 0;
      if (resourceSlideCounter < items3.length) {
        items3[resourceSlideCounter].classList.toggle("show");
        items3[resourceSlideCounter].classList.remove("hidden");
        items3[resourceSlideCounter].style.animation = "slideRightShow 1s ease";
        
      }
    }
  }
}
function resourcePrev() {
  if (resourceSlideCounter >= 0) {
    items3[resourceSlideCounter].classList.toggle("hidden");
    items3[resourceSlideCounter].classList.remove("show");
    items3[resourceSlideCounter].style.animation = "slideLeftHide 1s ease";
    resourceSlideCounter--;
  
  if (resourceSlideCounter >= 0) {
    items3[resourceSlideCounter].classList.toggle("show");
    items3[resourceSlideCounter].classList.remove("hidden");
    items3[resourceSlideCounter].style.animation = "slideLeftShow 1s ease";
    
  } else {
    resourceSlideCounter = items3.length-1;
    if (resourceSlideCounter < items3.length) {
      items3[resourceSlideCounter].classList.toggle("show");
      items3[resourceSlideCounter].classList.remove("hidden");
      items3[resourceSlideCounter].style.animation = "slideLeftShow 1s ease";
      
    }
  }
}
}

// Call the function to add scroll to top button
addScrollToTopButton();
