//PROBLEMA N�1: FIND THE INDEX
function search(array,num){
    for(let i=0;i<array.length;i++){
        if(array[i]==num){
            return i;
        }
        else -1;
    }
}

//PROBLE N�2:REVERSE AN ARRAY

function reversa(array){
    let inv=[];
    for(let i=0;i<array.length;i++){
        inv[i]=array[array.length-1-i];
    }
    return inv;
}
//PROBLEMA N°3
function reversa(array){
    reversa(array);
}
//PROBLEMA N�4:CONCATENAR

function concatenar(a,b){
    let c=[];
    for(let i=0;i<a.length+b.length;i++){
        if(i<a.length){
            c[i]=a[i];
        }
        else{
            c[i]=b[i-a.length];
        }
    }
    return c;
}
//PROBLEMA N°5
function concatenar(a,b){
    let c;
    c = a.concat(b);
}
//PROBLEMA N�6: SOCIEDAD SECRETA

function company(array){
    cadena ="";
    for(let i=0;i<array.length;i++){
        cadena += array[i][0];
    }
    return cadena;
}

//PROBLEMA N�7: COMPAPA INVERSA

function inversa(numero){
    let inv=0;
    let num = numero;
    while(num>0){
        inv = 10 *inv+num%10;
        num = Math.trunc(num/10);
    }
    if(numero < inv){
        return false;
    }
    else{
        return true;
    }
}

//PROBLEMA N�8: CONVERTI STRING - DECIMAL

function convertir(a){
   let temp="";
   let j=0;
   for(let i=0;i<a.length;i++){
       for(let j=0; j < a[i][j];j++){
             temp+=a[i][j];
       }
       a[i]=parseInt(temp)/100;
       temp="";   }
   return a;
}

//PROBLEMA N�9: FACTORIAL

function factorial(numero){
    acu=1;
    for(let i=1;i<=numero;i++){
        acu *= i;
    }
    return acu;
}

//PROBLEMA N�10: IMPRIME DIVISORES

function printDivisores(num){
    let a=[];
    let pos =0;
    for(let i=1; i<=Math.trunc(num/2);i++){
        if(num%i==0){
            a[pos]=i;
            pos++;
        }
        a[pos]=num;
        return a;
    }
}

//PROBLEMA N°11: menor mayor

function menorMayor(a){
    let temp=0;
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}
//PROBLEMA N°12
function RazonGeometrica(a){
    let razon=0;
    let siguiente=0;
    for(let i=0;i<a.length-1;i++){
        razon=a[i+1]/a[i];
    }
    siguiente=a[a.length-1]*razon;
    a.push(siguiente);
    return a;
}

//PROBLEMA N°13
function Secuencia(a){
    let razon=0;
    let siguiente=0;
    for(let i=0;i<a.length-1;i++){
        razon=a[i+1]-a[i];
    }
    siguiente=a[a.length-1]+razon;
    a.push(siguiente);
    return a;
}

//PROBLEMA N°14
function devolver(a){
    index=a.length-1;
    return a[index];
}

//PROBLEMA N°15
function mes(numero){
    let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
    return meses[numero-1];
}

//PROBLEMA N°16
function validar(a){
    let correcto=0;
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            correcto++;
        }
    }
    if(correcto==a.length){
        return true;
    }
    else{
        return false;
    }
}

//PROBLEMA N°17
function rebanada(a,b,c){
    if(c==0){
        return true;
    }
    else{
        if(c*b < a){
            return true;
        }
        else{
            return false;
        }
    }
}

//PROBLEMA N°18
function fibonaci(numero){
    let a=[1,1];
    for(let i=1;i<numero;i++){
        a[a.length]=a[i-1]+a[i];
    }
    return a[a.length-1];
}

//PROBLEMA N°19
function razonAritmetica(a){
    let razon=0;
    let siguiente=0;
    for(let i=0;i<a.length-1;i++){
        razon=a[i+1]-a[i];
    }
    siguiente=a[a.length-1]+razon;
    a.push(siguiente);
    return a;
}

//PROBLEMA N°20: mayor menor

function menorMayor(a){
    let temp=0;
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]<a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}