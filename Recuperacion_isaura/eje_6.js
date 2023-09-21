let pantalon = Number(150000)
let camisa = Number(75000)
let chaqueta = Number(250000)

total = pantalon+camisa+chaqueta;

alert("El total de la compra es:"+total)

if(total>=300000){
    let porcentaje = (total*15)/100
    alert(porcentaje)
}