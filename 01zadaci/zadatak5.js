var arrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function tri(array1) {
  var trojke = [];
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] % 3 === 0) {
      trojke.push(array1[i]);
    }
  }
  return trojke;
}
console.log(tri(arrayy));