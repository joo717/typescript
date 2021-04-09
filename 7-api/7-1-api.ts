type H = {
  type: string;
  price: number;
};

const hList: H[] = [
  { type: "a", price: 5000 },
  { type: "b", price: 7000 },
  { type: "a", price: 3000 },
  { type: "b", price: 2000 },
  { type: "c", price: 3500 },
  { type: "a", price: 2000 },
  { type: "b", price: 2000 },
  { type: "c", price: 3500 },
];

const aTotal = hList.reduce((pre, curr, currIndex, array) => {
  if (curr.type === "a") return pre + curr.price;
  else return pre;
}, 0);

const bTotal = hList.reduce((pre, curr, currIndex, array) => {
  if (curr.type === "b") return pre + curr.price;
  else return pre;
}, 0);

const cTotal = hList.reduce((pre, curr, currIndex, array) => {
  if (curr.type === "c") return pre + curr.price;
  else return pre;
}, 0);
console.log(aTotal);
console.log(bTotal);
console.log(cTotal);
