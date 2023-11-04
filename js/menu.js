document.getElementById('open-menu').addEventListener('click', function() {
    document.querySelector('.side-menu').style.width = '250px';
    document.querySelector('.menu-toggle').style.width = '0';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.side-menu').style.width = '0';
    document.querySelector('.menu-toggle').style.width = '60px';
});
