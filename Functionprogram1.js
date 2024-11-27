function Sample(){               //function
    return "message is old";
}
console.log(Sample());



function add(){                                 //function using Arbitary arguments
    for(let i=0;i<arguments.length;i++){
        console.log(i*2+" ");
    }
}

add(1,2,3,4,6);



function add1(...arg){ 
    let total=0;                                //function using spread opeartor with desire name
    for(let i=0;i<arg.length;i++){
        total+=arg[i];
        
    }
    return total;
}

console.log(add1(1,2,3,4,6));




const methodpro = function(...tr){       //function using function expression
    totala=0;
    for(let a=0;a<tr.length;a++){
        totala+=tr[a];
    }
    return totala;
}

console.log(methodpro(8,3,5,2,9,1,4));



const eq = (...tr)=>{                            // Arrow function
    totala=0;
    for(let a=0;a<tr.length;a++){
        totala+=tr[a];
    }
    return totala;
}
console.log(eq(5,9,8));


