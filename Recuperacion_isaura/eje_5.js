let a = 1;
let b = 200;
let z = 2;
let array=[];

for (a;a<=b;a++){
    let c=a%z;
    if(c==0){
        console.log("el","",a,"","es par");
    }
    if(c==0){
       array.push(a) 
    }
    
}  
alert("hay"+array.length+"pares")