var _a;
var myStr = "aaayyêudchaddddd";
var cosonantClustersFiltered = "";
var consonantClustersRegex = /(ch|gh|gi|kh|nh|ng|ngh|ph|qu|th|tr|)/gi;
var lettersRegex = /[aăâbcdđeêghiklmnoôơpqrstuưvxyáàảãạéèẻẽẹếềểễệíìỉĩịóòỏõọớờởỡợúùủũụứừửữự]/gi;
var consonantClustersMatches = ((_a = myStr.match(consonantClustersRegex)) === null || _a === void 0 ? void 0 : _a.filter(Boolean)) || [];
for (var i = 0; i < consonantClustersMatches.length; i++) {
    cosonantClustersFiltered = myStr.replaceAll(consonantClustersMatches[i], "");
}
console.log(cosonantClustersFiltered);
