function romanize (number) {
  if (isNaN(parseInt(number))) {
    return NaN;
  }
  var romanBasics = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1}, roman = "", i;
  for (i in romanBasics) {
    if (number >= romanBasics[i]) {
      roman += i;
      return roman;
    }
  }
}