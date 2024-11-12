function computeRowElements(rowIndex) {
  let rowArr = [];
  let tempArr = [];
  for (let i = 0; i <= rowIndex; i++) {
    if (rowArr.length === 0 || rowArr.length === 1) {
      rowArr.push(1);
    } else {
      for (let j = 0; j < rowArr.length - 1; j++) {
        let rowItem = rowArr[j] + rowArr[j + 1];
        tempArr.push(rowItem);
      }
      rowArr = [1, ...tempArr, 1];
      tempArr = [];
    }
  }
  console.log(rowArr);
  return rowArr;
}

computeRowElements(0);
computeRowElements(3);
computeRowElements(5);
