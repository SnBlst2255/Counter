function updateCounterSpan(){
    const span = document.getElementById('count-span');
    const count = localStorage.getItem('count');

    if(count == null){
        localStorage.setItem('count', '0');
        return;
    }

    span.innerHTML = count;
}

function increase(){
    const count = parseInt(localStorage.getItem('count')) + 1;
    localStorage.setItem('count', count.toString());
}

function decrease(){
    const count = parseInt(localStorage.getItem('count')) - 1;
    localStorage.setItem('count', count.toString());
}

function reset(){
    localStorage.setItem('count', '0');
}

document.getElementById('increase').addEventListener('click', function(){
    increase();
    updateCounterSpan();
});

document.getElementById('reset').addEventListener('click', function(){
    reset();
    updateCounterSpan();
});

document.getElementById('decrease').addEventListener('click', function(){
    decrease();
    updateCounterSpan();
});

document.addEventListener('keydown', function(e){
    if(e.key == ' '){
        reset();
        updateCounterSpan();
    }else if(e.key == 'ArrowDown'){
        decrease();
        updateCounterSpan();
    }else if(e.key == 'ArrowUp'){
        increase();
        updateCounterSpan();
    }
});

window.onload = function(){
    updateCounterSpan();
};