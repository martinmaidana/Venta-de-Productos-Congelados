let compras = [];

function set_data(){
    let producto1 = document.getElementById("producto");
    let producto2 = document.getElementById("elemento");

    let comprar = { sello: producto1.value , sellito:producto2.value};
    compras.push(comprar);

    let compras_JSON = JSON.stringify(compras);
    localStorage.setItem("compras", compras_JSON);

    let recuperando_arreglo = localStorage.getItem("compras");
    recuperando_arreglo = JSON.parse(recuperando_arreglo);
    console.log(recuperando_arreglo);

    for( let comprar of compras){
        console.log(comprar);
    }

    // let comprar_JSON=JSON.stringify(comprar);
    // console.log(comprar_JSON);



// localStorage.setItem("alguito", comprar);

// let recuperando_json = localStorage.getItem("comprar");
// recuperando_json = JSON.parse(recuperando_json);
// console.log(recuperando_json);



}


let btn = document.getElementById("boton");
btn.addEventListener("click", set_data);