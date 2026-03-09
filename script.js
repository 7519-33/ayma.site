// ==========================================================================
// PORTFOLIO JS – Effets scrapbook / paillettes / arc-en-ciel
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Rotation aléatoire + hover polaroids
    const elements = document.querySelectorAll('.polaroid, .sticker');
    elements.forEach(el => {
        const angle = Math.random() * 10 - 5;
        el.style.transform = `rotate(${angle}deg)`;
        el.dataset.angle = angle;

        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.05) rotate(0deg)';
            el.style.zIndex = '50';
            el.style.transition = 'all 0.3s ease';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `scale(1) rotate(${el.dataset.angle}deg)`;
            el.style.zIndex = '1';
        });
    });
});

// 2. Paillettes au mouvement de souris
document.addEventListener('mousemove', e => {
    if (Math.random() > 0.1) return;

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerText = '✨';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
});