"use strict";

/*
function Calc(operator, a, b) {

    let result;
    const checkValue = (a==="" || b==="" || typeof a !== 'number' || typeof b !== 'number' || !operator);
    let operations = {plus: "plus" , minus: "minus" , mult:"mult",  del:"del", exp:"exp", remn:"remn" };


    a=+a;
    b=+b;

    if(checkValue) {
        return 'error';
    }else if(operator in operations){

    switch(operator) {

    case"plus":
    result = a + b;
    break;

    case"minus":
    result = a - b;
    break;

    case"mult":
    result = a * b;
    break;

    case "del":
        if(b===0){
            result = "You cannot use zero in here";
        }else{
            result = a / b;
        }
    break;

    case"exp":
    result = a ** b;
    break;

    case"remn":
    result = a % b;
    break;

    default:
    result = "Uknown operation";
    break;    
    }
}
    console.log(result);
}

Calc("exp", 2, 3); */

function calc(operator, a, b){
    let result;
    const checkValue = (a==="" || b==="" || typeof a !== 'number' || typeof b !== 'number' || !operator);
    let operations = {plus: a + b, minus: a - b, del: a/b, mult: a * b , exp: a**b, rem: a % b};
    a=+a;
    b=+b;
    if(checkValue) {
        console.log('error');
    }else if(operator in operations){
        console.log(operations[operator]);
    }else {
        console.log('unknown operation')
    }
}

calc('del',3,'g');
calc('mult', 2 , 5);
calc ('dffgdfgd', 2, 4);
calc ('exp',3);



