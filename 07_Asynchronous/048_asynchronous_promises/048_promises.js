function rand(min, max){
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

connection('Connecting DB...', rand(1,3))
    // .then(answer => {
    //     console.log(answer);
    //     return connection(1111, rand(1,3));
    // })
    .then(answer => {
        console.log(answer);
        return connection('Carrying datas...', rand(1,3));
    })
    .then(answer => {
        console.log(answer);
        return connection('Showing datas...', rand(1,3));
    })
    .then(answer => {
        console.log(answer);
    })
    .catch(e => {
        console.log('ERROR:', e);
    });