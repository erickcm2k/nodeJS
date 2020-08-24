const doPromise = new Promise((resolve, reject) => {
    // Simulating things going right or wrong randomly.
    setTimeout(() => {
        let num = Math.round(Math.random());
        console.log(num);
        if(num == 1) {
            resolve('Here is your data!');
        } else {
            reject('Things went wrong!');
        }
    }, 0);
});

doPromise.then((result) => {
    console.log('Success!', result);
}).catch((error) => {
    console.log('Error:', error);
})