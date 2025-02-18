var myArr = ["th", "e", "urmum"];
var pos = 2;
var count = -1;
var arrCount = 0;
for (var i = 0; i < myArr.length; i++) {
  count += myArr[i].length;
  if (count >= pos) {
    arrCount = i;
    break;
  }
}
console.log(arrCount);
