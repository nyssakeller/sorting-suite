function bubbleSort(array) {
  for(j = 0; j < array.length; j++) {
    for(i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      };
    }; 
  };
  return array;
};


module.exports = bubbleSort;