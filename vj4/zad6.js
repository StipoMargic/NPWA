function *gen(str) {
  const strToArray = str.split(",");
  for (el of strToArray){
    yield el;
  }
}


const callNext = gen("Ja,sam,stipo");
console.log(callNext.next());
console.log(callNext.next());
console.log(callNext.next())
