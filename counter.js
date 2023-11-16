export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

const test = "hello";

console.log("hi test1i kwjhckwh wknwkdlewkl wwlljwojdew");
var val = "test1";
