function add(a, b) {
    return a + b;
}

function addAsync(a, b, cb) {
    setTimeout(() => cb(a + b), 500);
}

module.exports = { add, addAsync };
