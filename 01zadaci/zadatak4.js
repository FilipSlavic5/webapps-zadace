function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + " sati i " + minutes + " minuta.";         
}

console.log(time_convert(154));
console.log(time_convert(113));
console.log(time_convert(567));