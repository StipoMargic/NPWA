const itter =(arr) => {
    let i = 0;
    const inner = {next:
        function(){
            i++;
            return [arr[i], i]
        }
    }
    return inner;
}


const callNext = itter([1,2,3])

console.log(callNext.next());
console.log(callNext.next());