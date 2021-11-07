const notAFunc = (noun) => {
  return new Promise(resolve => resolve(noun+ " run"))
}

const aFunc = async (noun) => {
  const fullSen = await notAFunc(noun);

  setTimeout(() => console.log(fullSen), 3000)
}

aFunc("Stipo");
