function quickSort(arr = []) {
  if (arr.length < 2) {
    return arr;
  }

  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr[pivotIdx];
  const lessArr = [];
  const greaterArr = [];

  for (let i in arr) {
    if (arr[i] !== pivot) {
      arr[i] > pivot ? greaterArr.push(arr[i]) : lessArr.push(arr[i]);
    }
  }

  return [...quickSort(lessArr), pivot, ...quickSort(greaterArr)];
}
