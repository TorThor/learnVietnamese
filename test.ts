const myArr: string[] = ["th", "e", "urmum"];
const pos: number = 6;
let count: number = -1;
let arrCount: number = 0;

for (let i = 0; i < myArr.length; i++) {
  count += myArr[i].length;
  if (count >= pos) {
    arrCount = i;
    break;
  }
}

console.log(arrCount);
