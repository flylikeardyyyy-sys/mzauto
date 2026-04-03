// Cursor Proximity Effect (Subtle)
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    document.querySelector('.light-beam').style.transform = `translate(${x}px, ${y}px) rotate(-20deg)`;
});

// Simple Particle Generator
for (let i = 0; i < 30; i++) {
    let p = document.createElement('div');
    p.className = 'particle';
    let size = Math.random() * 3 + 'px';
    p.style.width = size;
    p.style.height = size;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.animationDuration = (Math.random() * 20 + 10) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    document.body.appendChild(p);
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navItems = document.querySelectorAll('.nav-item');
let isMenuOpen = false;

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        const line1 = mobileMenuBtn.querySelector('.btn-line-1');
        const line2 = mobileMenuBtn.querySelector('.btn-line-2');
        const line3 = mobileMenuBtn.querySelector('.btn-line-3');
        
        if (isMenuOpen) {
            line1.style.transform = 'translateY(10px) rotate(45deg)';
            line2.style.opacity = '0';
            line3.style.transform = 'translateY(-10px) rotate(-45deg)';
            
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100 * (index + 1));
            });
        } else {
            line1.style.transform = 'none';
            line2.style.opacity = '1';
            line3.style.transform = 'none';
            
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            
            navItems.forEach((item) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(32px)';
            });
        }
    });
}