const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Resolved');
  }, 1000);
});

myPromise.then(console.log)
