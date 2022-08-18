var navigation = document.getElementById('header-navigation');
var toggle = document.getElementById('toggler');

toggle.addEventListener('click', function() {
    navigation.classList.toggle('show');
    toggle.classList.toggle('exit');
})

const accordion = document.getElementsByClassName('box');

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}