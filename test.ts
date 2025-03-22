const marksRegs: RegExp[] = [
  /[àảãáạ]/gi,
  /[ằẳẵắặ]/gi,
  /[ầẩẫấậ]/gi,
  /[èẻẽéẹ]/gi,
  /[ềểễếệ]/gi,
  /[ìỉĩíị]/gi,
  /[òỏõóọ]/gi,
  /[ồổỗốộ]/gi,
  /[ờởỡớợ]/gi,
  /[ùủũúụ]/gi,
  /[ừửữứự]/gi,
  /[ỳỷỹýỵ]/gi,
];

// Define constants and lets for marks replacement
type myArrProps = {
  char: string;
  vowel: string;
  pos: number;
};
let myArr: myArrProps[] = [];
let tempArr;
let count: number = 0;
const countType: string[] = [
  "a",
  "ă",
  "â",
  "e",
  "ê",
  "i",
  "o",
  "ô",
  "ơ",
  "u",
  "ư",
  "y",
];

let sections: string = "yệu";

for (let i = 0; i < marksRegs.length; i++) {
  let myArr: myArrProps[] = [];
  while ((tempArr = marksRegs[i].exec(sections)) != null) {
    myArr[0] = {
      char: tempArr[i],
      vowel: countType[i],
      pos: tempArr.index,
    };
    sections = sections.replace(myArr[0].char, myArr[0].vowel);
    count++;
    break;
  }
}
