var ham = document.getElementById('ham');
var exit = document.getElementById('exit');
var menu = document.getElementById('menu');

ham.addEventListener('click',function(e) {
    menu.classList.toggle('hide-mobile');
    e.preventDefault();
})

exit.addEventListener('click',function(e) {
    menu.classList.toggle('hide-mobile');
    e.preventDefault();
})