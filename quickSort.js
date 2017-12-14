function quickSort(array) {
  let pivot = array[array.length - 1];
  let array1 = [];
  let array2 = [];
  
  if (array.length <= 1) {
    return array;
  }

  for ( let i = 0; i < array.length - 1; i++ ) {
    if ( pivot > array[i] ) {
      array1.push( array[i] );
    } else {
      array2.push( array[i] );
    }
  }

  return [...quickSort(array1), pivot, ...quickSort(array2)];
}

module.exports = quickSort;