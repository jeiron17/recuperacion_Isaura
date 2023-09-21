let a=Number(prompt("lado uno:"))
let b=Number(prompt("lado dos:"))
let c=Number(prompt("lado tres:"))

if(a==b && c){
    console.log("su triangulo es equilatero");
}
if(a==b || a==c || b==c && a!=b && c && b!=c ){
    console.log("su triangulo es isosceles")
}
if(a!=b && a!=c && b!=c){
    console.log("su triangulo es escaleno")
}
