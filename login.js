//check whether the number is prime or not//

function prime(number){
  var count = 0;
  for(var i=1; i<=number; i++){
  if(number%i==0){
    count++;
  }
  }
  if(count==2){
    console.log("Prime")
  }
  else{
    console.log("not");
  }
}
prime(3);
prime(6);



