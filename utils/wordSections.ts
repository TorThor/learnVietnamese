// Define the regexs
const triphthongsRegex = /(iêu|yêu|oai|oay|uôi|uya|uyê|ươi|ươu)/gi;
const diphthongsRegex: RegExp =
  /(ai|ao|au|ay|âu|ây|ia|iê|yê|eo|êu|oa|oă|oe|oi|ôi|ơi|ua|uô|uâ|uê|ui|uy|ưa|ươ|ưi|ưu)/gi;
const consonantClustersRegex: RegExp = /(ch|gh|gi|kh|nh|ng|ngh|ph|qu|th|tr)/gi;
const vowelsRegex: RegExp = /[aăâeêioôơuưy]/gi;
const consonantsRegex: RegExp = /[bcdđghklmnpqrstvx]/gi;
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

let obtainLetters = (sections: string) => {
  let myArr: myArrProps[] = [];

  outerLoop: for (let i = 0; i < marksRegs.length; i++) {
    while ((tempArr = marksRegs[i].exec(sections)) != null) {
      myArr[0] = {
        char: tempArr[0],
        vowel: countType[i],
        pos: tempArr.index,
      };
      sections = sections.replace(myArr[0].char, myArr[0].vowel);
      count++;
      break outerLoop;
    }
  }

  // Define the strings to be parsed
  let current: string = sections.slice(0, 3);
  let realArr: string[] = [];
  let loopCount: number = 0;

  // Define regex matching functions
  let triphthongMatch = (sections: string): string[] => {
    return sections.match(triphthongsRegex) || [];
  };
  let diphthongMatch = (sections: string): string[] => {
    return sections.match(diphthongsRegex) || [];
  };
  let consonantClusterMatch = (sections: string): string[] => {
    return sections.match(consonantClustersRegex) || [];
  };
  let vowelMatch = (sections: string): string[] => {
    return sections.match(vowelsRegex) || [];
  };
  let consonantMatch = (sections: string): string[] => {
    return sections.match(consonantsRegex) || [];
  };

  // Section parsing logic
  while (sections != "") {
    current = sections.slice(0, 3);
    if (triphthongMatch(current).length > 0) {
      realArr[loopCount] = triphthongMatch(current)[0];
      sections = sections.slice(3);
      loopCount++;
    } else {
      current = sections.slice(0, 2);
      if (consonantClusterMatch(current).length > 0) {
        realArr[loopCount] = consonantClusterMatch(current)[0];
        sections = sections.slice(2);
        loopCount++;
      } else if (diphthongMatch(current).length > 0) {
        realArr[loopCount] = diphthongMatch(current)[0];
        sections = sections.slice(2);
        loopCount++;
      } else {
        current = sections.slice(0, 1);
        if (vowelMatch(current).length > 0) {
          realArr[loopCount] = vowelMatch(current)[0];
          sections = sections.slice(1);
          loopCount++;
        } else {
          realArr[loopCount] = consonantMatch(current)[0];
          sections = sections.slice(1);
          loopCount++;
        }
      }
    }
  }
  return { myArr, realArr };
};

export default obtainLetters;
