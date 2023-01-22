var seta = document.getElementById('seta');  
var openseta = document.getElementById('openseta');

seta.addEventListener('click', function() {
    if (openseta.style.display == 'none') {
        openseta.style.display = 'flex';
    } else {
        openseta.style.display = 'none';
    }
});
