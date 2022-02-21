let videoCanStart = true;

function playVideo(e) {
    
    const video = document.querySelector(`video[data-key="${e.keyCode}"]`); //a la varibale video le asignamos del evento la propiedad keyCode del video.mp4qw
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //queremos que el efecto css triggers con el evento
    if (!video) { return }//cancelamos la ejecución de la función (si tocamos cualquier tecla que no sea una asignada a un video no saldrá null)
    if (videoCanStart) {
        key.classList.add('playing'); //cuando se presiona la tecla el atributo playing se ejecuta 
        video.play();
    } else {
        video.pause()
        key.classList.remove('playing')
    }

   


    video.addEventListener('ended', (event) => {
        videoCanStart = true;
    });

    video.addEventListener('pause', (event) =>  {
        videoCanStart = true;
    });

    video.addEventListener('playing', (event) =>  {
        videoCanStart = false;
    });
};




window.addEventListener('keydown', playVideo) // keydown is a HTML DOM Event. creamos la instancia para un evento cuando presionamos una tecla



