// Define the regexs
const triphthongsRegex =
  /(iêu|yêu|yếu|yều|yểu|yễu|yệu|oai|oái|oài|oải|oãi|oại|oay|oáy|oày|oảy|oãy|oạy|oeo|oeó|oeò|oeỏ|oeõ|oeọ|uai|uái|uài|uải|uãi|uại|uây|uấy|uầy|uẩy|uẫy|uậy)/gi;
const diphthongsRegex: RegExp =
  /(ai|ái|ài|ải|ãi|ại|ao|áo|ào|ảo|ão|ạo|au|áu|àu|ảu|ãu|ậu|ay|áy|ày|ảy|ãy|ậy|â|ây|ấy|ầy|ẩy|ẫy|ậy|ia|ía|ìa|ỉa|ĩa|ịa|iê|yê|iế|iề|iể|iễ|iệ|eo|éo|èo|ẻo|ẽo|ẹo|êu|ếu|ều|ểu|ễu|ệu|oa|óa|òa|ỏa|õa|ọa|oă|oắt|oằ|oẳ|oẵ|oặ|oe|óe|òe|ỏe|õe|ọe|oi|ói|òi|ỏi|õi|ọi|ôi|ối|ồi|ổi|ỗi|ội|ơi|ới|ời|ởi|ỡi|ợi|ua|úa|ùa|ủa|ũa|ụa|uô|uố|uồ|uổ|uỗ|uộ|uâ|uất|uầ|uẩ|uẫ|uậ|uê|uế|uề|uể|uễ|uệ|ui|úi|ùi|ủi|ũi|ụi|uy|úy|ùy|ủy|ũy|ụy|ưa|ứa|ừa|ửa|ữa|ựa|ươ|ướ|ườ|ưở|ưỡ|ượ|ưi|ưí|ừi|ửi|ưỡi|ựi|ưu|ứu|ừu|ửu|ữu|ựu)/gi;
const consonantClustersRegex: RegExp = /(ch|gh|gi|kh|nh|ng|ngh|ph|qu|th|tr)/gi;
const vowelsRegex: RegExp =
  /[aăâàảãáạằẳẵắặầẩẫấậeêèẻẽéẹềểễếệiìỉĩíịoôơòỏõóọồổỗốộờởỡớợuưùủũúụừửữứựyỳỷỹýỵ]/gi;
const consonantsRegex: RegExp = /[bcdđghklmnpqrstvx]/gi;

// Function to be called in learnPronounciate.tsx
let obtainLetters = (sections: string): string[] => {
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
  return realArr;
};

export {
  triphthongsRegex,
  diphthongsRegex,
  consonantClustersRegex,
  vowelsRegex,
  consonantsRegex,
  obtainLetters,
};
