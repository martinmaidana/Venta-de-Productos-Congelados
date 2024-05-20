// mediante una api de geolocalizacion, al entrar a la pagina, indicara la localizacion del usuario
let contenedor = document.getElementById("resultado");

//capturamos la API desde JS . en este caso se trata de una API que segun el IP indicara la localizacion del usuario. al entrar al sitio.
fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=89bfc7a7a1f34c47aa526ab73232f76f&ip_address=2804:4d98:250:1e00:9c33:ee28:19fd:ca73")
  .then((response) => response.json())
  .then((data) => {
    //cargare una imagen svg
    const svgUrl = data.flag.svg;

    const banderaImagenHtml = `<img src="${svgUrl}" alt="bandera" height="35px">`
    // Aquí puedes manejar la respuesta JSON
        contenedor.innerHTML = `<div><img src="./assets/periscope.png" alt="iconmap" height="19px"> Estas en la Ciudad de : ${data.city}.  
Provincia de : ${data.region}. Pais: ${data.country}. Continente: ${data.continent}. Codigo Postal: ${data.postal_code} Bandera: ${banderaImagenHtml}</div>`;
 
    console.log(data);
  });



const btnOcultarLocalizacion = document.getElementById(
  "btnOcultarLocalizacion"
);
btnOcultarLocalizacion.addEventListener("click", ocultarDivLocalizacion);
function ocultarDivLocalizacion() {
  var divLocalizacion = document.querySelector(".localizacion");
  divLocalizacion.style.display = "none";
}

//EDITANDO DOM DESDE EL NAVEGADOR
//HEADER

//Accediendo al nodo a traves de get element by ID
// let titulo = document.getElementById("titulo");
//defini un atributo de clase en el h1. que tiene un background color para poner el fondo celeste
// titulo.className = "fondoceleste";

let subtitulo = document.getElementById("subtitulo");
// console.log(subtitulo);
//mouseover/mouseout en el subtitulo vegetales. cambiando el color rojo al pasar el maouse y retorna a negro al sacar el maouse
subtitulo.addEventListener("mouseover", function () {
  this.style.color = "#ff0000";
});
subtitulo.addEventListener("mouseout", function () {
  this.style.color = "#000000";
});

//MAIN

//defini una variable con un valor vacio. para usarlo en una funcion
let valor = "";
/*en la funcion interactuo con el html. si en el input ingresan su nombre, recibiran un saludo con el nombre ingresado al final. que tb se muestra en la consola. De lo contrario recibiran un mensaje que indica que tienen que ingresar su nombre.  ademas use Value para conectar el valor ingresado y volcarlo en el html. Añado evento con Enter al input*/
let nombre = document.getElementById("nombre_usuario");
nombre.addEventListener("keypress", function (e) {
  //optimizacion
  e.keyCode === 13 && saludando();
});

// Crear array de usuarios
let usuarios = [];
//capturo un dato al storage local. accedo a los datos a traves de getitem
if (localStorage.getItem("usuarios")) {
  // transformo el objeto a Json
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
  botones = document.querySelector(".botones");
  //despues de acceder al dato. la accedo al boton cerrar sesion
  botones.innerHTML = `
<label for="">Bienvenido ${usuarios[0]}</label>
            <hr> <button onclick="logoff()" type="submit">Cerrar sesión</button>`;
}
// con esta funcion remuevo y elimino la inforamcion previamente guardada en el storage. y reincia la  posibilidad de cargar un dato nuevamente en el input
function logoff() {
  localStorage.removeItem('usuarios');
  location.reload();
}
// con dom me traigo el id de un input
function saludando() {
  let ingreso_al_sistma = document.getElementById("ingresar_al_sistema");
  if (nombre.value != valor) {
    usuarios.push(nombre.value);
    //JSON.stringify transforme un objeto  a un string en formato JSON.  asi puedo recuperarlo
    let encUsuarios = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", encUsuarios);
    location.reload();
  } else {
    //al apretar enter o aceptar se dispara un mensaje de alerta pidiendo ingresar un nombre para operar
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "info",
      title: "Para poder operar, tenes que ingresar un nombre",
    });

    // console.log("tenes que ingresar un valor")
  }
}

//cree un array de objetos. la clase Producto tiene las variables que voy a utilizar. nombre es reconocido como string y precio y stock son reconocidos como numeros.

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
  }
}
// //Declaramos un array de productos para almacenar objetos.

const productosTotales = JSON.parse(localStorage.getItem('productos')) || [
  {
    id: 1,
    nombre: "Brocoli",
    precio: 800,
    stock: 8,
    carro: 0,
    img: "brocoli.jpg",
  },
  {
    id: 2,
    nombre: "Espinacas",
    precio: 900,
    stock: 2,
    carro: 0,
    img: "espinaca.webp",
  },
  {
    id: 3,
    nombre: "Zanahorias",
    precio: 1000,
    stock: 1,
    carro: 0,
    img: "zanahoria.jpg",
  },
  {
    id: 4,
    nombre: "Zapallo",
    precio: 1200,
    stock: 6,
    carro: 0,
    img: "zapallo.jpg",
  },
  {
    id: 5,
    nombre: "Repollo",
    precio: 1100,
    stock: 0,
    carro: 0,
    img: "repollo.webp",
  },
  {
    id: 6,
    nombre: "Esparragos",
    precio: 700,
    stock: 0,
    carro: 0,
    img: "esparragos.jpg",
  },
];

const productos = productosTotales.filter((producto) => producto.stock >= 0);

let i = 1;
// usando query selector .  ingrese las etiquetas div al html y con for of, recorri el array de objetos. con if . else if y else en funcion del stock y usando clases de css diferencie si el stock esta por agotarse o esta agotado.

const cards = document.querySelector(".listadovegetales");
// console.log("Lista de productos");
drawProducts();
function drawProducts() {
  let data = "";
  let vstock = "";
  for (let listado of productos) {
    // DESESTRUCTURAR
    const { id, nombre, precio, stock, img } = listado;

    if (stock == "1" || stock == "2" || stock == "3") {
      vstock = `<span class="alerta">Stock ${stock} - Quedan Pocas Unidades</span>`;
    } else if (stock == 0) {
      vstock = `<span class="agotado">Stock ${stock} - AGOTADO!</span>`;
    } else {
      vstock = "Stock " + stock;
    }
    data += `<div class="card">
    <img class="imagen" src="./assets/${img}" alt="${nombre}">
    <p>$ ${precio}</p>
    <p>${vstock}</p>
    <label for="number">${nombre}</label>
    <br>
    <button class="addButton" type="submit" itemID="${id}""><img src="./assets/agregar-carrito.png" alt="iconmap" height="14px">AGREGAR</button>
</div>`;
    cards.innerHTML = data;
    i++;
  }
}

//Detectar la funcion Añadir al carrito.
let addButton = document.getElementsByClassName("addButton");
var myFunction = function (e) {
  e.preventDefault();
  var attribute = this.getAttribute("itemID");
  productoSeleccionado = productos.find((obj) => obj.id == attribute);
  //mediante sweet alert añadi un mixin con una leyenda e icono al hacer click al boton añadir
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Se añadio al carrito",
  });
  //EJEMPLO DE OPERADOR TERNARIO CON EL STOCK
  //mediante sweet alert añadi un mensaje de alerta con una leyenda e icono al hacer click al boton añadir, cuando el stock es cero
  if (
    productoSeleccionado.stock > 0 &&
    productoSeleccionado.stock > productoSeleccionado.carro
  ) {
    productoSeleccionado.carro++;
  } else {
    Swal.fire({
      icon: "error",
      text: "No se puede agregar al carrito, por el momento, no hay más stock",
    });
  }
  updateCarrito();
};

for (var j = 0; j < addButton.length; j++) {
  addButton[j].addEventListener("click", myFunction, false);
}

function updateCarrito() {
  let i = 1;
  // usando query selector .  ingrese las etiquetas div al html y con for of, recorri el array de objetos. con if . else if y else en funcion del stock y usando clases de css diferencie si el stock esta por agotarse o esta agotado.
  let data = "";
  const cards = document.querySelector(".carro");
  //si cada producto es distinto de 0 se agregara al carrito. con el boton borrar se podra eliminar.

  for (let productosTotales of productos) {
    if (productosTotales.stock !== 0) {
      data += `<article>
        <div class="imgContainer">
            <img src="./assets/${productosTotales.img}" alt="${productosTotales.name}" />
        </div>
        <p>Cantidad: ${productosTotales.carro}</p>
        <p>Precio: ${productosTotales.precio}</p>
        <button class="botonBorrar borrar_elemento" id="${productosTotales.id}">Borrar</button>
    </article>`;
    }

    cards.innerHTML = data;
    i++;
    let botones_borrar = document.querySelectorAll(".borrar_elemento");
    for (let boton of botones_borrar) {
      boton.addEventListener("click", borrar_producto);
    }
  }
  calcularPreciototal();
}
// con esta funcion puedo eliminar el elemento agregado a nuestro carrito
function borrar_producto(e) {
  // let padre = e.target.parentNode;
  // console.log(e.target.id);
  productosTotales[e.target.id - 1].carro = 0;
  updateCarrito();

  //mediante sweet alert añadi un mixin con una leyenda e icono al hacer click al boton borrar
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "error",
    title: "Se elimino del carrito",
  });
}
//cree un boton para mostrar y ocultar el carrito
let btn_carrito = document.getElementById("mostrar_carrito");
btn_carrito.addEventListener("click", function () {
  let carrito = document.getElementById("carrito");

  if (carrito.style.display != "none") {
    carrito.style.display = "none";
  } else {
    carrito.style.display = "block";
  }
});

// sumo el total de productos añadidos al carrito
function calcularPreciototal() {
  const productosAdquiridos = productos.filter(
    (producto) => producto.carro > 0
  );
  let costoTotal = 0;
  function operaciones() {
    costoTotal = productosAdquiridos.reduce(
      (acumulador, elemento) => acumulador + elemento.precio * elemento.carro,
      0
    );
    document.getElementById("costoTotal").value = costoTotal;
    // console.log(costoTotal);
  }
  operaciones();
}

// evento click al apretar boton izq del mouse. tirando un mensaje de alerta, dentro de una funcion anonima
// let btn_continuar = document.getElementById("btn_continuarCompra");
// btn_continuar.addEventListener("click", function () {
//     alert("este boton , mas adelante, servira para volver a añadir cosas al carrito cuando estemos en un paso previo a finalizar la compra")
// })

//evento mousedown al presionar. mouseup al levantar el boton y ademas cambia al color amarillo el propio boton
// let btn_finalizar = document.getElementById("btn_finalizarCompra");
// btn_finalizar.addEventListener("mousedown", function presion1() {
//     // console.log("pronto con este boton direccionaremos a un espacio donde puedas elegir los medios de pago");
//     document.getElementById("btn_finalizarCompra").style.backgroundColor = '#ffff00';

//     //MEDIOS DE PAGO. EFECTIVO O TARJETA.
//     let forma_de_pago = document.getElementsByName("eot");
//     //forma = forma de pago
//     for (forma of forma_de_pago) {
//         forma.addEventListener("click", function (f) {
//             let tipo_pago = document.getElementsByName("value")
//             if (tipo_pago === "efectivo") {
//                 console.log("tu pago es este");
//             } else {
//                 console.log("vas a pagar en cuotas raton")
//             }
//             console.log(f.target.value);
//         })
//     }
//     console.log(forma_de_pago);
// });
//evento mouseup. al levantar la presion del btn izquierdo cambia a color rojo.
// btn_finalizar.addEventListener("mouseup", function presion2() {
//     document.getElementById("btn_finalizarCompra").style.backgroundColor = '#ff0000';
// })

// let form = document.getElementById("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let coment = document.getElementById("comentario");
//   // console.log(" El comentario es :", comentario.value);
// });

let subTotalValue = document.getElementById("costoTotal");

let btnIrAPagar = document.getElementById("btnIrAPagar");
let divMediosDePago = document.querySelector(".mediosdepago");

btnIrAPagar.addEventListener("click", () => {
  if (subTotalValue.value > 0) {
    divMediosDePago.classList.remove("hidden");
  }
});

// Medios de Pago
let radiosEot = document.querySelectorAll('input[name="eot"]');

let divPagoEnCuotas = document.querySelector(".pagoencuotas");

let divTotalCompra = document.querySelector(".totalCompra");

let inputTotalCompra = document.getElementById("inputTotalCompra");

radiosEot.forEach((radio) => {
  radio.addEventListener("click", function () {
    if (radio.value == "efectivo") {
      divTotalCompra.classList.remove("hidden");
      divPagoEnCuotas.classList.add("hidden");
      inputTotalCompra.value = parseInt(subTotalValue.value) * 0.9;
    } else if (radio.value == "cuotas") {
      divTotalCompra.classList.add("hidden");
      divPagoEnCuotas.classList.remove("hidden");
    }
  });
});

// Pagos en cuotas
let radiosCuotas = document.querySelectorAll('input[name="pagoencuotas"]');
radiosCuotas.forEach((radio) => {
  radio.addEventListener("click", function () {
    if (radio.value == "3") {
      divTotalCompra.classList.remove("hidden");
      inputTotalCompra.value = Math.round(parseInt(subTotalValue.value) * 1.15);
    } else if (radio.value == "6") {
      divTotalCompra.classList.remove("hidden");
      inputTotalCompra.value = Math.round(parseInt(subTotalValue.value) * 1.2);
    } else if (radio.value == "9") {
      divTotalCompra.classList.remove("hidden");
      inputTotalCompra.value = Math.round(parseInt(subTotalValue.value) * 1.25);
    } else if (radio.value == "12") {
      divTotalCompra.classList.remove("hidden");
      inputTotalCompra.value = Math.round(parseInt(subTotalValue.value) * 1.3);
    }
  });
});

let btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
btnFinalizarCompra.addEventListener("click", () => {
  // SeatAlert, con el mesnjae de la compra fue satisfactoria.
  productosTotales.forEach((producto) => {
    if (producto.stock - producto.carro >= 0) {
      producto.stock = producto.stock - producto.carro;
      producto.carro = 0;
    }
  });
  updateCarrito();
  drawProducts();
  compraSatisfactoria();
});

function compraSatisfactoria() {
  Swal.fire({
      title:  `${usuarios[0]||'Genial!'} tu compra se realizó correctamente!`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
  }).then((result) => {
      result['isConfirmed'] && (localStorage.setItem('productos', JSON.stringify(productosTotales))(location.reload()))
  })
}

//FOOTER

//use createElement para insertar un h4 y le agregue una clase, que determinaba un color al h4
// let redessociales = document.createElement("h3");
// redessociales.innerText = "Seguinos en redes sociales";
// redessociales.className = "colorazul";
// redesfooter.append(redessociales);
// /*El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Utilice la etiqueta li  */
// let li = document.getElementsByTagName("li");
// // console.log(li);

// for (let elemento of li) {
//   // console.log(elemento);
// }
