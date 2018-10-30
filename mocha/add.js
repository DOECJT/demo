function add(...rest) {
    let sum = 0;
    for (let num of rest) {
        sum += num;
    }
    return sum;
}

module.exports = add;