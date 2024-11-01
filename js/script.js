document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada com sucesso!");
});


    // Scroll suave para links internos
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Popup de confirmação no botão de compra
    document.querySelectorAll('.btn-cta').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (confirm('Deseja realmente garantir o seu agora? Aproveite esta oportunidade!')) {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Destacar cards ao entrar na área visível
    const cards = document.querySelectorAll('.card-categoria');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('highlight');
            } else {
                entry.target.classList.remove('highlight');
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => {
        observer.observe(card);
    });


