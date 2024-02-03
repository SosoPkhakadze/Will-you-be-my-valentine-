const valentineContainer = document.getElementById('valentine-container');
const starsContainer = document.querySelector('.stars');

const images = [
    'images/420596328_1549127032578457_7498673087055038151_n.jpg',
    'images/420596328_1549127032578457_7498673087055038151_n.jpg',
    'images/420719328_787001726596693_2058657544292985491_n.jpg',
    'images/420727634_900188641597410_5177402367945942725_n.jpg',
    'images/420798478_1110907433259273_3533775255924874693_n.jpg',
    'images/420836660_400346459147529_5807493590068416950_n.jpg',
    'images/421029628_1105851440840327_3614398274190223264_n.jpg',
    'images/421096862_269078016036034_3355660811234311571_n.jpg',
    'images/349955412_803785708036261_7174560416103218368_n.jpg',
    'images/364211129_841647373978036_1101409574070718941_n.jpg'
];

// Falling stars setup
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight; // Random start position

    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    starsContainer.appendChild(star);
}

// Create initial set of falling stars
for (let i = 0; i < 50; i++) {
    createStar();
}

// Images setup
function createImage() {
    const image = document.createElement('img');
    const randomX = Math.random() * window.innerWidth;
    const randomY = -50; // Start above the viewport
    const randomImage = images[Math.floor(Math.random() * images.length)];

    image.src = randomImage;
    image.style.position = 'absolute';

    // Adjust the size dynamically based on the aspect ratio
    const aspectRatio = getAspectRatio(randomImage);
    if (aspectRatio >= 1) {
        // Landscape or square image
        image.style.width = '230px'; // Adjust the width as needed
        image.style.height = 'auto';
    } else {
        // Portrait image
        image.style.width = 'auto';
        image.style.height = '230px'; // Adjust the height as needed
    }

    image.style.top = `${randomY}px`;
    image.style.left = `${randomX}px`;

    valentineContainer.appendChild(image);

    // Animation
    const animation = image.animate(
        [
            { transform: `translate(0, ${randomY}px)` },
            { transform: `translate(0, ${window.innerHeight + 50}px)` },
        ],
        {
            duration: Math.random() * 3000 + 3000, // Adjust the duration as needed
            easing: 'linear',
            iterations: Infinity,
        }
    );

    animation.onfinish = () => {
        valentineContainer.removeChild(image);
        createImage();
    };
}

function getAspectRatio(imageSrc) {
    const img = new Image();
    img.src = imageSrc;
    return img.width / img.height;
}

// Create initial set of images
for (let i = 0; i < 10; i++) {
    createImage();
}

function answerYes() {
    window.location.href = 'nextpage.html';
}

function answerNo() {
    const overlay = document.getElementById('overlay');
    const overlayWidth = overlay.offsetWidth;
    const overlayHeight = overlay.offsetHeight;

    const maxX = window.innerWidth - overlayWidth - 20; // 20px padding from the right
    const maxY = window.innerHeight - overlayHeight - 20; // 20px padding from the bottom

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    overlay.style.left = `${randomX}px`;
    overlay.style.top = `${randomY}px`;
}







