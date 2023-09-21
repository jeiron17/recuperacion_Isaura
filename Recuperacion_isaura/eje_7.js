let pantalon = Number(150000)
let camisa = Number(75000)
let chaqueta = Number(250000)

total = pantalon+camisa+chaqueta;

alert("El total de la compra es:"+total)

let pagar = prompt("desea pagar con efectivo o tarjeta");

if (pagar=="efectivo"){
    let pago = Number(prompt("digitar cantidad de dinero"));
    var devolucion = pago-total;
    alert("Cantidad a devolver"+devolucion);
}

if(pagar=="tarjeta"){
    let x = prompt("digite los primeros 6 numeros de su tarjeta")
    let y = prompt("digite los ultimos 4 numero de su tarjetas")
    let z = prompt("a cuantas cuotas")
    let firma = prompt("Firma")
    alert("cuotas:"+z+"\nfirma:"+firma)
}