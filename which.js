function inArray(arr1, arr2) {
  let x, y;
  let r = [];
  for (x = 0; x < arr1.length; x++) {
    for (y = 0; y < arr2.length; y++) {
      if (arr2[y].includes(arr1[x]) === true) {
        r.push(arr1[x]);
      } else {
      }
    }
  }
  r = [...new Set(r)];
  return r.sort();
}
