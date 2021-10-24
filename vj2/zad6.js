const sayHello = () => {
  console.log("Hello!!!")
}

const zakasnjeliPozdrav= () => {
  setTimeout(sayHello, 3000);
}
zakasnjeliPozdrav()
