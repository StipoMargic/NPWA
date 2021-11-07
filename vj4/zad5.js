const itter =(string) => {
  const strToArray = string.split(",");
  let i = -1;
  const inner = {next:
      function(){
        i++;
        return strToArray[i];
      }
  }
  return inner;
}


const callNext = itter("Ja,sam,stipo");
console.log(callNext.next());
console.log(callNext.next());
console.log(callNext.next());
