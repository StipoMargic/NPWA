const callback = (arg) => {
  return arg % 2 === 0;
}

const grupiraj = (array, callbackFn) => {
  const object = {true: [], false: []};

  array.forEach(el => {
    callbackFn(el) ? object.true.push(el) : object.false.push(el);
  })

  return object;
}

console.log(grupiraj([1,2,3,4,5], callback))
