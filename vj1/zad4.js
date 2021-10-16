const callback1 = arg => arg % 2 === 0;
const callback2 = arg => arg > 10;

const komutativnost = (cb1, cb2, value) => {
const res1 = cb1(value);
const res2 = cb2(value);

return res1 && res2;
}

console.log(komutativnost(callback1, callback2, 11))
