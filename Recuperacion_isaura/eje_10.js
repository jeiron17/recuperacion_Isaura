let a = Number(prompt("digitar un numero"))
let b = 1;
let contador = 0;
for(let i=0;i<=a;i++){
   var primo = a%i==0
   contador=contador+1   
}

if(contador==2){
    alert(a+"es primo")
}else{
    alert(a+"no es primo")
}