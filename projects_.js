document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('background');

    const createStar = () => {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        background.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    };

    setInterval(createStar, 100);

    const style = document.createElement('style');
    style.innerHTML = `
        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px white, 0 0 20px white;
            animation: blink 5s infinite ease-in-out;
        }

        @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});