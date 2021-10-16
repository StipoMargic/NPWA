const callbackFn = arg => {
  return arg > 5;
}

const priotiziraj = (array, callback) => {
  const newArray = [];

  array.forEach(el => {
    callback(el) ? newArray.unshift(el) : newArray.push(el);
  })

  return newArray;
}

console.log(priotiziraj([11,3,4,5,6], callbackFn))
