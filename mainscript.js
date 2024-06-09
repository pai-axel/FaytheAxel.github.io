document.addEventListener('DOMContentLoaded', () => {
    const words = ['"Halo"', '"Hello"', '"你好"', '"こんにちは"'];
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

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = '-60px'; // Adjust based on your header height
    } else {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
