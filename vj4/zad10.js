const myPromise = new Promise((_, reject) => {
  setTimeout(() => {
    reject('Error');
  }, 1000);
});

myPromise.then().catch(console.log)
