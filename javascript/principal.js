let cp = document.querySelector('.cp');
let gm = document.querySelector('.gm');


function mostrar(numero) {
    console.log(numero);
}

cp.addEventListener('click', function(){
    mostrar('1');
});
gm.addEventListener('click', function(){
    mostrar('2');
});