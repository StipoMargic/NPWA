function *simulacijaRazgovora (wordArr) {
  for (el of wordArr){
    if(el === "generator"){
      yield "hej!";
    }else {
      yield "besmislica";
    }
  }
}

const gen = simulacijaRazgovora(["ja", "o", "generator"])
const fun = () => {
  if (gen.next().done === true){
    clearInterval(int)
  }else {
    console.log(gen.next())
  }
}
let int = setInterval(fun, 1000)
