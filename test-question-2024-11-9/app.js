function computeRowElements(rowIndex) {
  console.time("process-compute");
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
  console.timeEnd("process-compute");
  return rowArr;
}

computeRowElements(0);
computeRowElements(3);
computeRowElements(5);

function computeRowElementsRefactored(rowIndex) {
  console.time("process-test");
  let prev = 1;
  let rowArr = [prev];
  for (let i = 1; i <= rowIndex; i++) {
    let item = prev * ((rowIndex - i + 1) / i);
    prev = item;
    rowArr.push(item);
  }
  console.log(rowArr);
  console.timeEnd("process-test");
  return rowArr;
}

computeRowElementsRefactored(10);
computeRowElementsRefactored(6);
computeRowElementsRefactored(3);

/**
 *
 * [] [] [] []
 * 3! = 3 * 2 * 1
 * 4! = 4 * 3 * 2 * 1
 *
 * 3! /
 */
