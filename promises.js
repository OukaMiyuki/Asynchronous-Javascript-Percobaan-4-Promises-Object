const p = new Promise((resolve, reject) => { //resolve and reject are name of functions
    setTimeout( ()=>{
        resolve(1); //send value to function resolve
        //reject(new Error('There\'s an error!'));
    }, 2000);
});

p
    .then( result => console.log('result is ', result))
    .catch( err=> console.log('Error ', err.message));

    //Next you'll gonna implement the promises into the callback project before