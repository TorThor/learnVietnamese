var marksRegs = [
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
var myArr = [];
var tempArr;
var count = 0;
var countType = [
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
var sections = "yệu";
for (var i = 0; i < marksRegs.length; i++) {
    var myArr_1 = [];
    while ((tempArr = marksRegs[i].exec(sections)) != null) {
        myArr_1[0] = {
            char: tempArr[i],
            vowel: countType[i],
            pos: tempArr.index,
        };
        sections = sections.replace(myArr_1[0].char, myArr_1[0].vowel);
        count++;
        break;
    }
}
