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
//PROBLEMA N�3:CONCATENAR

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

//PROBLEMA N�4: SOCIEDAD SECRETA

function company(array){
    cadena ="";
    for(let i=0;i<array.length;i++){
        cadena += array[i][0];
    }
    return cadena;
}

//PROBLEMA N�5: COMPAPA INVERSA

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

//PROBLEMA N�6: CONVERTI STRING - DECIMAL

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

//PROBLEMA N�7: FACTORIAL

function factorial(numero){
    acu=1;
    for(let i=1;i<=numero;i++){
        acu *= i;
    }
    return acu;
}

//PROBLEMA N�8: IMPRIME DIVISORES

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

//PROBLEMA N°9: menor mayor

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

//PROBLEMA N°10: mayor menor

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
