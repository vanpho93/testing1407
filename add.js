function add(a, b) {
    return a + b;
}

function addAsync(a, b, cb) {
    setTimeout(() => cb(a + b), 500);
}

function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const gotTypeError = typeof a !== 'number' || typeof b !== 'number';
            if(gotTypeError) return reject(new Error('Type error'));
            resolve(a + b);
        }, 500);
    });
}

module.exports = { add, addAsync, addPromise };
