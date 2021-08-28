function rand(min = 1, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connection(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Connection failed!');

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

async function connect(){
    try{
        let connecting = await connection('Connection DB...', rand());
        console.log(connecting);
        // let error = await connection(1111, rand());
        // console.log(error);
        let carrying = await connection('Carrying datas...', rand());
        console.log(carrying);
        let showing = await connection('Showing datas...', rand());
        console.log(showing);
    }catch(e){
        console.log(e);
    }
}

connect();