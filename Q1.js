//Print numbers 1-100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for both, print "FizzBuzz".

for(let i=1; i<=100 ; i++){
   
    if(i%3==0 && i%5==0){
        console.log("fizzBuzz");
    }
else if(i%3==0 ){
 console.log("fizz");
}

else if(i%5==0){
    console.log("buzz");
}

else{
    console.log(i);
}
}