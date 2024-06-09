document.addEventListener('DOMContentLoaded', () => {
    const words = ['"Halo"', '"Hello"', '"你好"', '"こんにちは"', '"Hola"', '"Bonjour"'];
    let currentWordIndex = 0;
    const changingText = document.querySelector('.changing-text');
    const typingSpeed = 150; // Typing speed in milliseconds
    const eraseSpeed = 100;  // Erasing speed in milliseconds
    const delayBetweenWords = 2000; // Delay between words in milliseconds

    function typeWord(word, index = 0) {
        if (index < word.length) {
            changingText.textContent = word.substring(0, index + 1);
            setTimeout(() => typeWord(word, index + 1), 100);
        } else {
            setTimeout(() => eraseWord(word), 2000); // Hold the word for 2 seconds
        }
    }

    function eraseWord(word, index = word.length) {
        if (index > 0) {
            changingText.textContent = word.substring(0, index - 1);
            setTimeout(() => eraseWord(word, index - 1), 50);
        } else {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeWord(words[currentWordIndex]);
        }
    }

    typeWord(words[currentWordIndex]);
});
//for header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = '-400px'; // Adjust based on header height
    } else {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.style.width = '600px';
        img.style.height = '400px';
        img.style.objectFit = 'cover';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
      img.style.width = '300px';
      img.style.height = '200px';
      img.style.objectFit = 'cover';
    });
  });

gsap.registerPlugin(ScrollTrigger);

// Education section scroll animation
gsap.from("#education .univ-logo img", {
    scrollTrigger: {
        trigger: "#education",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    y: 50,
    opacity: 0,
    duration: 1,
});

gsap.from("#education h2", {
    scrollTrigger: {
        trigger: "#education",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
});

gsap.from("#education .description", {
    scrollTrigger: {
        trigger: "#education",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    y: 150,
    opacity: 0,
    duration: 2,
});

// Interactivity with GSAP (optional)
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from(".gallery-images img", {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top center",
        end: "bottom center",
        scrub: true,
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

