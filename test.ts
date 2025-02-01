const myStr = "aaayyêudchaddddd";
let cosonantClustersFiltered = "";

const consonantClustersRegex = /(ch|gh|gi|kh|nh|ng|ngh|ph|qu|th|tr|)/gi;
const lettersRegex =
  /[aăâbcdđeêghiklmnoôơpqrstuưvxyáàảãạéèẻẽẹếềểễệíìỉĩịóòỏõọớờởỡợúùủũụứừửữự]/gi;

const consonantClustersMatches =
  myStr.match(consonantClustersRegex)?.filter(Boolean) || [];

for (let i = 0; i < consonantClustersMatches.length; i++) {
  cosonantClustersFiltered = myStr.replaceAll(consonantClustersMatches[i], "");
}

console.log(cosonantClustersFiltered);
