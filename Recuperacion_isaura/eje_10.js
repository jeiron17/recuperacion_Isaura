let a = Number(prompt("digitar un numero"))
let b = 1;
let contador = 0;
let i=0;i<=a;i++){
   if(a%i==0){
   contador++
   }
}

if(contador==2){
    alert(a+"es primo")
}else{
    alert(a+"no es primo")
}
