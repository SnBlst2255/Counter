function updateCounterSpan(){
    const span = document.getElementById("count-span");
    const count = localStorage.getItem("count");

    if(count == null){
        localStorage.setItem("count", "0");
        return;
    }

    span.innerHTML = count;
}

document.getElementById("increase").addEventListener("click", function(){
    const count = parseInt(localStorage.getItem("count")) + 1;
    localStorage.setItem("count", count.toString());
    updateCounterSpan();
});

document.getElementById("reset").addEventListener("click", function(){
    localStorage.setItem("count", "0");
    updateCounterSpan();
});

document.getElementById("decrease").addEventListener("click", function(){
    const count = parseInt(localStorage.getItem("count")) - 1;
    localStorage.setItem("count", count.toString());
    updateCounterSpan();
});

window.onload = updateCounterSpan;