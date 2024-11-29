//Arrow function

const add=(...art)=>{
    for(let k=0;k<=art.length;k++){
        console.log(k+" ");
    }
}
add(1,2,3,4,5,6,7);



//Function Expression

const sub=(total,element)=>{
    return total-element;
}

console.log(sub(100,27))



// Function closure

const outer=()=>{
    let a ="hello guys";

    const inner=()=>{
        console.log(a)
    }

    return inner();
}

outer();


//Call back function

function addProgram(Callback,a,b){
    let res=a+b;
    console.log(res);
    
    Callback();
}

function innersub_program(){
    console.log("Loading the class ....")
}

addProgram(innersub_program,2,7);