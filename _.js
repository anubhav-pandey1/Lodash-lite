const _ = {
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower); // num if num > lower, else lower if num < lower
      const clampedValue = Math.min(lowerClampedValue, upper); // LCV if LCV < upper, upper if LCV > upper
      return clampedValue;
    },
    
    inRange(number, start, end) {
      if (end === null || end === undefined) {
        end = start;
        start = 0;
      };
      if (start > end) {
        const temp = start;
        start = end;
        end = temp;
      }; // Pre-validation for the input values
  
      if ((number < start) || (number >= end)) { // Implementation
        return false;
      }
      else {
        return true;
      };
    },
  
    words(string) {
      const words = string.split(' ');
      return words;
    },
  
    pad(string, length) {
      if (string.length >= length) {
        return string;
      }; //Pre-validation condition
  
      const padLen = length - string.length;
      if (padLen%2 === 0) {
        const startPad = ' '.repeat(padLen/2);
        const endPad = ' '.repeat(padLen/2);
        const paddedString = startPad + string + endPad;
        return paddedString;
      }
      else {
        const startPad = ' '.repeat(((padLen - 1)/2));
        const endPad = ' '.repeat(((padLen + 1)/2));
        const paddedString = startPad + string + endPad;
        return paddedString;
      };
    },
  
    has(object, key) {
        if (object[key] == undefined) {
          return false;
        } // WE MUST USE BRACKET NOTATION FOR ACCESSING KEYS THAT HAVE NUMBERS, SPACES or SPECIAL CHARS
        else {
          return true;
        }
      },
  
    invert(object) {
      const keys = Object.keys(object);
      const values = Object.values(object);
      const inverted = {};
      for (let i = 0; i < values.length; i++) {
        inverted[values[i]] = keys[i];
      }
      return inverted;
    },

    findKey(object, predicate) {
      for (key in object) {
        if (predicate(object[key])) {
          return key;
        }
        else {
          return undefined;
        }
       };
    },

    drop(arr, num) {
      if (num === null || num === undefined) {
        arr.shift();
        return arr;
      }
      else if (num === 0) {
        return arr;
      }
      else {
        for (let i = 0; i < num; i++) {
          arr.shift();
        }
        return arr;
      };
    },

    dropWhile(arr, predicate) {
      const dropNumber = arr.findIndex((element, index) => {return !predicate(element, index, arr)});
      let droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
    },

    chunk(arr, size) {
      if (size === null) {
        size = 1;
      };
      let newArr = [];
      for (let i = 0; i < arr.length; i+=size) {
        let arrChunk = arr.slice(i,i+size);
        newArr.push(arrChunk);
      };
    return newArr;
    }
};
  
  // Do not write or modify code below this line.
  module.exports = _; 