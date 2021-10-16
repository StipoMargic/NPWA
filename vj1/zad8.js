const sayHello = () => {
  console.log("Hello again")
}

const pokvarenaPloca = () => {
  setInterval(sayHello, 1000)
}

pokvarenaPloca()
