    // Control overlay usuario
    try {
        document.getElementById('user-avatar').addEventListener('click', function() {
            var menu = document.querySelector('.dropdown-menu');
            menu.hidden = !menu.hidden;
        });
    } catch (error) {
        console.error('Error al añadir event listener al avatar de usuario:', error);
    }

    // Animación de Titulo del blog
    try {
        document.addEventListener('DOMContentLoaded', function() {
            var links = document.querySelectorAll('.header-info a');
            links.forEach(function(link) {
                var text = link.textContent;
                link.setAttribute('data-text', text);
                link.innerHTML = '';
                for (var i = 0; i < text.length; i++) {
                    var span = document.createElement('span');
                    span.textContent = text[i];
                    link.appendChild(span);
                }
            });
        });
    } catch (error) {
        console.error('Error al añadir animación a los enlaces del título del blog:', error);
    }

    // Control de cuentas Google y Facebook
    try {
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const app = this.getAttribute('data-app');
                document.getElementById('overlay-message').textContent = `Iniciar sesión con ${app}?`;
                document.getElementById('overlay').style.display = 'flex';
            });
        });

        document.getElementById('overlay-no').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'none';
        });

        document.getElementById('overlay-yes').addEventListener('click', function() {
            alert('Esta funcionalidad no está disponible por este momento.');
            document.getElementById('overlay').style.display = 'none';
        });
    } catch (error) {
        console.error('Error al añadir control de cuentas sociales:', error);
    }

      // Control overlay compartir
      document.addEventListener('DOMContentLoaded', () => {
        try {
            const shareOverlay = document.getElementById('share-overlay');
            
            document.querySelectorAll('.share-btn').forEach(button => {
                button.addEventListener('click', () => {
                    shareOverlay.style.display = 'flex';
                });
            });
    
            document.querySelectorAll('.social-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const app = this.getAttribute('data-app');
                    shareOverlay.style.display = 'none';
                    document.getElementById('overlay-message').textContent = `¿Quieres compartirlo en ${app}?`;
                    document.getElementById('overlay').style.display = 'flex';
                    document.getElementById('overlay-no').style.backgroundColor = '#555';
                    document.getElementById('overlay-yes').style.backgroundColor = '#555';
                });
            });
            
            document.getElementById('overlay-no').addEventListener('click', function() {
                document.getElementById('overlay').style.display = 'none';
            });
    
            document.getElementById('close-overlay').addEventListener('click', () => {
                shareOverlay.style.display = 'none';
            
            });

        } catch (error) {
            console.error('Error al añadir event listener al overlay:', error);
        }
    });
    
    
    // Control ampliación de imágenes del carrusel y difuminado del fondo con animación
        try {
            document.querySelectorAll('.carousel img').forEach(img => {
                img.addEventListener('click', function() {
                    const expandedImgOverlay = document.createElement('div');
                    expandedImgOverlay.classList.add('expanded-img-overlay');

                    const expandedImg = document.createElement('img');
                    expandedImg.src = this.src;
                    expandedImg.classList.add('expanded-img');

                    const closeBtn = document.createElement('button');
                    closeBtn.textContent = 'Cerrar';
                    closeBtn.classList.add('close-btn');

                    expandedImgOverlay.appendChild(expandedImg);
                    expandedImgOverlay.appendChild(closeBtn);
                    document.body.appendChild(expandedImgOverlay);

                    // Add animation classes
                    setTimeout(() => {
                        expandedImgOverlay.classList.add('show');
                        expandedImg.classList.add('show');
                    }, 10);

                    // Close expanded image overlay
                    closeBtn.addEventListener('click', () => {
                        expandedImgOverlay.classList.remove('show');
                        expandedImg.classList.remove('show');
                        setTimeout(() => {
                            document.body.removeChild(expandedImgOverlay);
                        }, 300);
                    });

                    expandedImgOverlay.addEventListener('click', () => {
                        expandedImgOverlay.classList.remove('show');
                        expandedImg.classList.remove('show');
                        setTimeout(() => {
                            document.body.removeChild(expandedImgOverlay);
                        }, 300);
                    });

                    // Prevent closing when clicking on the image
                    expandedImg.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                });
            });
        } catch (error) {
            console.error('Error al añadir control de ampliación de imágenes del carrusel:', error);
        }
