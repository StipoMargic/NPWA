let isTrue = 0;
let isFalse = 0;

const callback = arg => {
  return arg === true;
}

const vecina = (array, callbackFn) => {
  for (let i = 0; i < array.length; i++) {
    let result = callbackFn(array[i]);
    result ? isTrue++ : isFalse++;
  }

  return isTrue > isFalse;
}

console.log(vecina([true, true, false, false], callback));
