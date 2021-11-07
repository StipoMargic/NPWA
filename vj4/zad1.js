const getSum = (arr) => {
    let sum = 0;

    arr.forEach(element => {
       sum += element; 
    });

    return sum;
}

console.log(getSum([1,2,3]));