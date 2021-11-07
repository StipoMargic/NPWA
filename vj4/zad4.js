const itter =(arr) => {
    let i = 0;
    const inner = {next:
        function(){
            i++;
            if(i === arr.length - 1) return {value: arr[i], done:true}
            return {value: arr[i], done:false}
        }
    }
    return inner;
}


const callNext = itter([1,2,3])
console.log([1,2,3].length);
console.log(callNext.next());
console.log(callNext.next());