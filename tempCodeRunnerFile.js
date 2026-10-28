function sum(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([]));