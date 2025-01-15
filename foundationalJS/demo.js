const data = [
  "car",
  "car",
  "truck",
  "truck",
  "truck",
  "walk",
  "van",
  "bike",
  "walk",
  "van",
  "bike",
  "bike",
  "walk",
  "van",
  "bike",
];
const transport = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transport);
