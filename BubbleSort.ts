function bubbleSortWithForLoop(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    // Notice that j < (length - i)
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare the adjacent positions
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        // swap elements
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

function bubbleSortWithDoLoop(arr = []) {
  let swapped = false;

  do {
    swapped = false;

    arr.forEach((item, idx) => {
      if (item > arr[idx + 1]) {
        let tmp = item;

        item = arr[idx + 1];
        arr[idx + 1] = tmp;
        swapped = true;
      }
    });
  } while (swapped);

  return arr;
}

function recursiveBubbleSort(arr, n = arr.length) {
  if (n < 2) return arr;
  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
  }
  return recursiveBubbleSort(arr, n - 1);
}
