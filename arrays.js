var chocolateBars = ["snickers", "hundred grand" , "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(arr , element){
  
  arr.unshift(element);
  
  return arr;
}

function addElementToBeginningOfArray(arr , element){
  
  return [element , ...arr]
}

function addElementToEndOfArray(array , element){
  
  return [...array , element]
  
}

function destructivelyAddElementToEndOfArray (array, element){
  
  return array.push(element);
  
}