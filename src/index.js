
exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0) return 0;
return array.reduce(
    (prev,curr) => {
      return curr < prev ? curr : prev;
    } 
);
}

exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0) return 0;
return array.reduce(
    (prev,curr) => {
      return curr > prev ? curr : prev;
    } 
);
}

exports.avg = function avg (array) {
if (arguments.length == 0 || array.length == 0) return 0;
let sum = array.reduce((prev,curr) => curr + prev);
return sum/array.length;  
}
