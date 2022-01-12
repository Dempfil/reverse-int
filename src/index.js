module.exports = function reverse (n) {
    n = n + '';
        let reversedText = n.split('').reverse().join('');
        let reverse = parseInt(reversedText, 10);
    console.log("reversed number: ", reverse);
        return reverse;
}
