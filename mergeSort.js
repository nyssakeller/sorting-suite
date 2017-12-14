function mergeSort(array)  {
  const midPoint = Math.floor(array.length / 2);
  const array1 = array.slice(0, midPoint);
  const array2 = array.slice(midPoint, array.length);
  
  if(array.length <= 1) {
    return array;
  };

  return merge(mergeSort(array1), mergeSort(array2));
};


function merge(array1, array2) {
  let mergedArray = [];

  while(array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      mergedArray.push(array1.shift());
    } else {
      mergedArray.push(array2.shift());
    };
  };

  mergedArray.push(...array1, ...array2);
  return mergedArray;
};


module.exports = mergeSort, merge;