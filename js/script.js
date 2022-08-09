const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes(); 
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    
    if (min < 10) min  = '0' + min ;

    if (seg < 10) seg = '0' + seg;

    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

document.getElementById('btn-main').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "main");
});

document.getElementById('btn-blue').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "blue");
});

document.getElementById('btn-orange').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "orange");
});

document.getElementById('btn-purple').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "purple");
});

document.getElementById('btn-green').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "green");
});

const shirnk_btn = document.querySelector(".shirnk-btn");

let activeIndex;

shirnk_btn.addEventListener("click", () => {
    document.body.classList.toggle("shirnk");
    
    shirnk_btn.classList.add("hovered");

    setTimeout(() => {
        shirnk_btn.classList.remove("hovered");
    }, 500)
});


function openNav(){
    document.getElementById("myNav").style.width = '100%';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}