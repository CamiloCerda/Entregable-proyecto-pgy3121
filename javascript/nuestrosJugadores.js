class jugador {
    constructor(id, nombre, edad, estilo, categoria, genero, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.estilo = estilo;
        this.categoria = categoria;
        this.genero = genero;
        this.descripcion = descripcion;
    }
}

let jugadores = [];
jugadores.push(new jugador(1, 'Camilo Cerda', 28, 'estilo 1', 'T.C.', 'hombre', 'descripcion'));
jugadores.push(new jugador(2, 'Gonzalo Muñoz', 31, 'estilo 2', 'T.C.', 'hombre', 'descripcion'));
jugadores.push(new jugador(3, 'Claudio Palacios', 27, 'estilo 3', 'T.C.', 'hombre', 'descripcion'));
jugadores.push(new jugador(4, 'Camilo Masias', 16, 'estilo 3', 'juvenil', 'hombre', 'descripcion'));
jugadores.push(new jugador(5, 'Ding Ning', 18, 'estilo 3', 'juvenil', 'mujer', 'descripcion'));

let imagenesJugadores = [[1, `C:/Users/Camilo Cerda Vasquez/Desktop/Paginas de prueba/Javascript/img/tdm/galeria/jugadores/9.jpg`],
                         [2, 'C:/Users/Camilo Cerda Vasquez/Desktop/Paginas de prueba/Javascript/img/tdm/galeria/jugadores/6.jpg'], 
                         [3, 'C:/Users/Camilo Cerda Vasquez/Desktop/Paginas de prueba/Javascript/img/tdm/galeria/jugadores/2.jpg'],
                         [4, 'C:/Users/Camilo Cerda Vasquez/Desktop/Paginas de prueba/Javascript/img/tdm/galeria/jugadores/1.jpg'], 
                         [5, 'C:/Users/Camilo Cerda Vasquez/Desktop/Paginas de prueba/Javascript/img/tdm/galeria/ding-ning.jpg']];
                     
function buscar(){
    let radioSeleccionado, comboBoxCategoriaSeleccionado; 
    if (contenedorjugadores.children.length > 0) {
        let condicion = true;
        while(condicion){
            try {
                contenedorjugadores.removeChild(contenedorjugadores.children[0]);
            }catch(error) {
                    condicion = false;
                }
        }
    }
    
    //rescatar el valor del radio button genero seleccionado
    for (let i = 0; i < radioBotonesGenero.length; i++) {
        if(radioBotonesGenero[i].checked) {
            radioSeleccionado = radioBotonesGenero[i].value;
        }
    }
    //rescatar el valor del combo Box catgoria seleccionado
    comboBoxCategoriaSeleccionado = comboBoxCategoria.value;

    //creamos una lista que guardará los jugadores que cumplen el requisito buscado
    let jugadoresCumplenSeleccion = [], imagenesJugadoreCumplenSeleccion = [];
    for(let i = 0; i < jugadores.length; i++) {
        if((radioSeleccionado == jugadores[i].genero || radioSeleccionado == 'todos') && (comboBoxCategoriaSeleccionado == jugadores[i].categoria || comboBoxCategoriaSeleccionado == 'todos')){
            jugadoresCumplenSeleccion.push(jugadores[i]);
            imagenesJugadoreCumplenSeleccion.push(imagenesJugadores[i]);
        }
    }
    if(jugadoresCumplenSeleccion.length == 0) {
        let noHayJugadores = document.createElement('div');
        noHayJugadores.classList.add('mensajeInicial');
        contenedorjugadores.appendChild(noHayJugadores);
        let mensaje = document.createElement('h2');
        mensaje.textContent = 'No hay jugadores que cumplan con la condición especificada';
        noHayJugadores.appendChild(mensaje);
    }else {
        //si hay jugadores
        for(let i = 0; i < jugadoresCumplenSeleccion.length; i++) {
            let jugadorDiv = document.createElement('div');
            jugadorDiv.classList.add('jugador');
            contenedorjugadores.appendChild(jugadorDiv);
            let imagenJugador = document.createElement('img');
            imagenJugador.src = imagenesJugadoreCumplenSeleccion[i][1];
            jugadorDiv.appendChild(imagenJugador);
            let nombreJugador = document.createElement('a');
            nombreJugador.textContent = jugadoresCumplenSeleccion[i].nombre;
            nombreJugador.href = 'C:/Users/Camilo Cerda Vasquez/Desktop/Paginas de prueba/Javascript/html/paginaPersonalASS.html';
            nombreJugador.target = '_blank';
            jugadorDiv.appendChild(nombreJugador);
        }
    }
    //console.log(jugadoresCumplenSeleccion);
    //alert(radioSeleccionado+' y '+ comboBoxCategoriaSeleccionado)
}
/*--- Variables ---*/
var botonBuscar = document.querySelector('.buscar'),
    contenedorjugadores = document.querySelector('.jugadores'),
    radioBotonesGenero = document.getElementsByName('radioGenero'),
    comboBoxCategoria = document.getElementById('category');

botonBuscar.addEventListener('click', buscar);