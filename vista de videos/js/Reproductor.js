var cuerpoDom = document.getElementsByTagName('body')[0]
var casaBoton = document.getElementsByClassName('video-container')[0]
var video = document.querySelectorAll('video')




video.forEach(play => play.addEventListener('click', () => {

    play.classList.add('active');


    if (play.paused) {
        play.play();

    } else {
        play.pause();
    }

    if (play.classList == 'active') {
        play.play();
        play.setAttribute('controls', '');



        cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');

        lightbox_container = document.getElementById('lightbox_container');

        lightbox_container.style.width = '100%';
        lightbox_container.style.height = '100%';
        lightbox_container.style.position = 'fixed';
        lightbox_container.style.zIndex = '0';
        lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        lightbox_container.style.top = '0';
        lightbox_container.style.left = '0';

        casaBoton.appendChild(document.createElement('I')).setAttribute('id', 'cerrar');

        cerrar_cuadro = document.getElementById('cerrar');
        cerrar_cuadro.classList = 'fa fa-times';
        cerrar_cuadro.setAttribute('aria-hidden', 'true');



        cerrar_cuadro = document.getElementById('cerrar');
        cerrar_cuadro.addEventListener('click', cerrar_modal);

        function cerrar_modal() {
            play.classList.remove('active');
            play.removeAttribute('controls')
            play.removeAttribute('loop')
            cuerpoDom.removeChild(lightbox_container);
            casaBoton.removeChild(cerrar_cuadro);
            play.pause();
        }


    }
    else {

        play.classList.remove('active');
        play.removeAttribute('controls')
        play.removeAttribute('loop')
        cuerpoDom.removeChild(lightbox_container);
        casaBoton.removeChild(cerrar_cuadro);
        play.pause();

    }

}));