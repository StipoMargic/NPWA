const sayHi = () => {
  console.log("Hej za sada")
}
const ogranicenoPonavljanje = () => {
  const interval = setInterval(sayHi, 1000)

  setTimeout(function () {clearInterval(interval)}, 5000);
}

ogranicenoPonavljanje()
