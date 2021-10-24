const myFilter = (arr, cb) => {
    let newArray = [];

    arr.forEach(el => {
        let res = cb(el);
        if (res) newArray.push(el);
    })
    return newArray;
}

console.log(myFilter([1,2,3,4,5], (el) => el < 3));