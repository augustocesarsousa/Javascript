let $clock = document.querySelector('.clock');
let seconds = 0;
let timer;

document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('btn-start')){
        clearInterval(timer);
        $clock.classList.remove('paused');
        startTimer();
    }

    if(el.classList.contains('btn-pause')){
        clearInterval(timer);
        $clock.classList.add('paused');
    }

    if(el.classList.contains('btn-reset')){
        clearInterval(timer);
        $clock.classList.remove('paused');
        $clock.innerHTML = '00:00:00';
        seconds = 0;
    }
});

function startTimer(){
    timer = setInterval(function(){
        seconds++;
        $clock.innerHTML = createTimer(seconds);
    }, 1000);
}

function createTimer(seconds){
    let timer = new Date(seconds * 1000);
    return timer.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}