const myIterator = (arr) => {
    let i = 0;
        const innerFunc = () => {
            let res= arr[i] + "je" + i + "clan niza";
            i++;
            return res;
        }
        return innerFunc;
    }

    