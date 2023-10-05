function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject("Input is not an array");
      } else {
        const filteredAndLowercased = mixedArray
          .filter(item => typeof item === 'string')
          .map(item => item.toLowerCase());
          
        if (filteredAndLowercased.length === 0) {
          reject("No lowercase words found in the array");
        } else {
          resolve(filteredAndLowercased);
        }
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  