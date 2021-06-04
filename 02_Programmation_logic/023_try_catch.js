function sum(n1,n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw new Error(`n1 or n2 is not a number!`);
    }

    return n1+n2;
}

try{
    console.log(sum("a",3));
}catch(e){
    console.log(e);
}

// with finally

try{
    console.log(a);
}catch(e){
    // error
}finally{
    console.log(`Always executed!`);
}
