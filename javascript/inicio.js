let sonidopingpong = document.querySelector('.sonidopingpong');
let inputUserName = document.querySelector('.nombreusuario');
let acceder = document.querySelector('.acceder');


function sonar() {
    sonidopingpong.play();
}

inputUserName.addEventListener('click', sonar);

/* function entrar(){
    window.open('../html/principal.html', '_self');
}
acceder.addEventListener('click', entrar); */

acceder.addEventListener('click', function(){
    window.open('html/principal.html', '_self');
});

