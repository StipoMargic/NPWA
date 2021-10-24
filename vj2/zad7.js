const sayBye = () => {
  console.log("Bye")
}

const helloGoodbye = () => {
  console.log("HELLO")
  setTimeout(sayBye, 2000)
}

helloGoodbye()
