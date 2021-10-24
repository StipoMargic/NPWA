const zbroji = (number, accumulator) => number + accumulator;

const myReduce = (arr, cb, acc) => {
    arr.forEach(element => {
        acc = cb(element, acc);
    });

    return acc;
}

console.log(myReduce([1,2,3,4,5], zbroji, 0));