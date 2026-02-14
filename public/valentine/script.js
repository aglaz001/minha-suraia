// ============================================
// GLOBAL STATE
// ============================================
let currentPhase = 1;
let heartsCaught = 0;
let currentSlide = 0;
let musicPlaying = false;
let soundCloudWidget = null;

// IMPORTANT: Add your SoundCloud playlist URL here
const SOUNDCLOUD_PLAYLIST_URL = "https://soundcloud.com/agostinho-lazaro/sets/para-ti-minha";

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupPhase1Valentine();
    setupPhase2Slideshow();
    setupPhase3Messages();
    setupPhase4Game();
    setupPhase5Restaurant();
    setupFinalScreen();
    createFloatingHearts();
});

function initializePage() {
    showPhase(1);
}

// Music is now handled by the embedded SoundCloud player at the bottom of the page
// It will auto-play when the page loads

// ============================================
// PHASE 1: CLASSIC VALENTINE QUESTION
// ============================================
function setupPhase1Valentine() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        // Create confetti
        launchConfetti();

        // Move to next phase after a short delay
        setTimeout(() => {
            showPhase(2);
        }, 1000);
    });

    // Function to make NO button run away
    function makeNoButtonRunAway() {
        const container = document.querySelector('.valentine-buttons');
        const containerRect = container.getBoundingClientRect();

        // Get button dimensions
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Calculate safe bounds
        const maxX = Math.max(0, containerRect.width - btnWidth - 20);
        const maxY = Math.max(0, containerRect.height - btnHeight - 20);

        // Generate random position
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Apply position
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.3s ease';
    }

    // Desktop: run away on hover
    noBtn.addEventListener('mouseenter', makeNoButtonRunAway);

    // Mobile: run away on touch
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        makeNoButtonRunAway();
    });

    // Also prevent click on NO button (just in case)
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        makeNoButtonRunAway();
    });
}

// ============================================
// PHASE 2: PHOTO SLIDESHOW
// ============================================
function setupPhase2Slideshow() {
    const images = document.querySelectorAll('.slideshow-image');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const continueBtn = document.getElementById('continueToMessages');
    const indicatorsContainer = document.getElementById('slideIndicators');

    // Create indicators
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('slide-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    function goToSlide(index) {
        images[currentSlide].classList.remove('active');
        document.querySelectorAll('.slide-indicator')[currentSlide].classList.remove('active');

        currentSlide = index;

        images[currentSlide].classList.add('active');
        document.querySelectorAll('.slide-indicator')[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const newIndex = (currentSlide + 1) % images.length;
        goToSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentSlide - 1 + images.length) % images.length;
        goToSlide(newIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);

    continueBtn.addEventListener('click', () => {
        showPhase(3);
    });
}

// ============================================
// PHASE 3: ROMANTIC MESSAGES
// ============================================
function setupPhase3Messages() {
    const continueBtn = document.getElementById('continueToGame');

    continueBtn.addEventListener('click', () => {
        showPhase(4);
        startHeartGame();
    });
}

// ============================================
// PHASE 4: HEART CATCHING GAME
// ============================================
function setupPhase4Game() {
    const continueBtn = document.getElementById('continueToMenu');

    continueBtn.addEventListener('click', () => {
        showPhase(5);
    });
}

function startHeartGame() {
    const gameArea = document.getElementById('gameArea');
    const counter = document.getElementById('heartCounter');
    const continueBtn = document.getElementById('continueToMenu');

    heartsCaught = 0;
    const totalHearts = 10;

    function createHeart() {
        if (heartsCaught >= totalHearts) {
            continueBtn.style.display = 'block';
            return;
        }

        const heart = document.createElement('div');
        heart.classList.add('game-heart');
        heart.textContent = '💖';

        const maxX = gameArea.offsetWidth - 50;
        const maxY = gameArea.offsetHeight - 50;

        heart.style.left = Math.random() * maxX + 'px';
        heart.style.top = Math.random() * maxY + 'px';

        heart.addEventListener('click', () => {
            heartsCaught++;
            counter.textContent = `${heartsCaught}/${totalHearts}`;
            heart.remove();

            // Create confetti effect
            createConfetti(heart.getBoundingClientRect());

            // Create next heart after a short delay
            setTimeout(createHeart, 800);
        });

        gameArea.appendChild(heart);

        // Remove heart after 3 seconds if not clicked
        setTimeout(() => {
            if (heart.parentElement) {
                heart.remove();
                setTimeout(createHeart, 500);
            }
        }, 3000);
    }

    // Start with first heart
    createHeart();
}

// ============================================
// PHASE 5: RESTAURANT
// ============================================
function setupPhase5Restaurant() {
    const continueBtn = document.getElementById('continueToFinal');

    continueBtn.addEventListener('click', () => {
        showPhase('finalScreen');
        createHeartRain();
        launchConfetti();
    });
}

// ============================================
// FINAL SCREEN
// ============================================
function setupFinalScreen() {
    // Heart rain is created when entering this phase
}

function createHeartRain() {
    const heartRain = document.getElementById('heartRain');

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('falling-heart');
            heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (3 + Math.random() * 2) + 's';
            heartRain.appendChild(heart);
        }, i * 200);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showPhase(phaseNumber) {
    const phases = document.querySelectorAll('.phase');
    phases.forEach(phase => phase.classList.remove('active'));

    const targetPhase = typeof phaseNumber === 'number'
        ? document.getElementById(`phase${phaseNumber}`)
        : document.getElementById(phaseNumber);

    if (targetPhase) {
        targetPhase.classList.add('active');
        currentPhase = phaseNumber;
    }
}

function createFloatingHearts() {
    const containers = ['floatingHearts', 'floatingHearts2'];
    const hearts = ['💕', '💖', '💗', '💝', '❤️'];

    containers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container) return;

        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (3 + Math.random() * 2) + 's';
            container.appendChild(heart);
        }
    });
}

// ============================================
// CONFETTI EFFECT
// ============================================
function createConfetti(rect) {
    const colors = ['#FF4D8D', '#FFB4D6', '#FFC7E0', '#FF7BA8'];
    const confettiCount = 20;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = rect.left + rect.width / 2 + 'px';
        confetti.style.top = rect.top + rect.height / 2 + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';

        document.body.appendChild(confetti);

        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 2 + Math.random() * 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = 0, y = 0;
        let opacity = 1;

        const animation = setInterval(() => {
            x += vx;
            y += vy + 0.5; // gravity
            opacity -= 0.02;

            confetti.style.transform = `translate(${x}px, ${y}px)`;
            confetti.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(animation);
                confetti.remove();
            }
        }, 16);
    }
}

function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const confettiCount = 150;
    const colors = ['#FF4D8D', '#FFB4D6', '#FFC7E0', '#FF7BA8', '#FFF5F9'];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -20,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c, index) => {
            c.x += c.vx;
            c.y += c.vy;
            c.rotation += c.rotationSpeed;
            c.vy += 0.1; // gravity

            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.rotation * Math.PI / 180);
            ctx.fillStyle = c.color;
            ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
            ctx.restore();

            if (c.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });

        if (confetti.length > 0) {
            requestAnimationFrame(animate);
        } else {
            // Clear canvas after confetti is done
            setTimeout(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }, 100);
        }
    }

    animate();
}
