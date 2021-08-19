function romanize (number) {
  if (isNaN(parseInt(number))) {
    return NaN;
  }
  let romanBasics = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
  let roman = "";
  let i;
  for (i in romanBasics) {
    while (number >= romanBasics[i]) {
      roman += i;
      number -= romanBasics[i];
    }
  }
  return roman;
}