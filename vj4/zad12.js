const fakePeople = [
  { name: 'Ivo', hasPets: false},
  { name: 'Eva', hasPets: true},
  { name: 'Marko', hasPets: true}
]

const fakeApiCall = (i) => {
  return new Promise((res, rej) => {
  setTimeout(() => {
    if (i > 2 || i < 0){
      rej("Wrong index")
    }else {
      res(fakePeople[i])
    }}, Math.random()*3000);
  })
}

const getAllData = () => {
  Promise.all([fakeApiCall(1), fakeApiCall(2), fakeApiCall(0)]).then(console.log).catch(console.log);
}
