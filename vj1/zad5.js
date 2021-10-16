const addTwo = arg => arg+2;
const multByTwo = arg => arg * 2;
const square = arg => arg * arg;

const pipe = (array, value) => {
  let final = array[0](value)
  for (let i = 1; i < array.length; i++) {
    let lastResult = array[i-1](value)
    let newResult = array[i](lastResult);
    console.log(lastResult, newResult)
    final += newResult;
  }

  return final;
}

console.log(pipe([addTwo, multByTwo, square], 1))
