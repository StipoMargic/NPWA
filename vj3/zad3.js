const unija = (arr, num) => {
    if(arr.includes(num) === false){
        return num;
    }
}

const myReduce =(arr1, arr2, cb) => {
    let newArray = [...arr1];
    arr2.forEach(element => {
        res = cb(arr1, element);
        if (res) newArray.push(res);
    });
    return newArray;
}

console.log(myReduce([1,2,3], [3,4,5], unija));