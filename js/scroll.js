/*window.addEventListener('DOMContentLoaded', function() {
    // Logo principal que se desvanece
    const logoPrincipal = document.querySelector('.logo');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const opacity = 1 - (scrollPosition / (windowHeight * 0.5));
        const finalOpacity = Math.max(0, Math.min(1, opacity));
        logoPrincipal.style.opacity = finalOpacity;
    });

    // Logo que aparece con gradiente al hacer scroll hacia abajo
    const logoScroll = document.querySelector('.header .nigger');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        // El gradiente es al revés: opaco cuando se scrollea hacia abajo
        let opacity = (scrollPosition / (windowHeight * 0.5));
        opacity = Math.max(0, Math.min(1, opacity));
        logoScroll.style.opacity = opacity;
    });
}); 
*/
