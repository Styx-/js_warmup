var my_max = function(arr){
 var max=arr[0];   
    for (var i=0; i<arr.length; i++){
        if (arr[i] > max) {
            max=arr[i];
        }
    }
   return max;
};


var vowel_count = function(str) {
   var vowels=['A','E','I','O','U','Y'];
   var count=0;
    for (var i=0; i<str.length; i++){
        if (vowels.indexOf(str[i].toUpperCase()) != -1) {
            count ++;
        }
    }
    return count;
};

var reverse = function(str) {
    var reverse='';
    for (i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse;
};



var add = function(num_one, num_two) {
  return num_two + num_one;
};

var multiply = function(num_one, num_two) {
  return num_one * num_two;
};

var subtract = function(num_one, num_two) {
  return num_one - num_two;
};

var divide = function(num_one, num_two) {
  return num_one / num_two;
};











console.log(my_max([1,56,2,3,-1,0]));
console.log(vowel_count("hello world"));
console.log(reverse("this is a string"));