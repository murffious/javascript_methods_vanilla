// I added a Test Array
var testArray = ['foo', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5'];
var numbers = [1,2,3,4,5,6,7,8,9];

var filter = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

var reduce = function(arr, cb, setAcc){
  var acc = setAcc;

  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
};


var any = function(arr, cb){
  var isTrue = false;

  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      isTrue = cbOutput;
    }
  }
  
  return isTrue;
}
.some() 
    
.every()


.map() 
var map = function(arr, cb){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    var newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  
  return newArr;
}
