const delayCounter =(target, wait) => {

  const insideFunction = () => {
    setTimeout(function (){
    for (let i = 1; i < target ; i++) {
      console.log(i)
    }}, wait)
  }

  return insideFunction;
}

delayCounter(5, 2000)()
