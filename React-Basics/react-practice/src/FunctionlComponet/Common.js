function EvenNumbers() {
  let evenAr = [];
  console.log("evneumber functions calling....");
  for (let i = 0; i <= 5000000; i++) {
    if (i % 2 == 0) {
      evenAr.push(i);
    }
  }
  return evenAr;
}
export { EvenNumbers };
