let sonidopingpong = document.querySelector('.sonidopingpong');

let inputUserName = document.querySelector('.nombreusuario');

function sonar() {
    sonidopingpong.play();
}

inputUserName.addEventListener('click', sonar);