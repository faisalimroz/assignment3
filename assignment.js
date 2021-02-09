
//kilometeeToMeter function
//declare a varialble meter
//multiply the parameter with 1000
//return meter

function kilometerToMeter(n){
    var meter= n*1000;
    return meter;
}
var result=kilometerToMeter(10);
console.log(result);
//budgetCalculator funtion
//declare three variable and a total variable
//multiply the three variable with given values
//count the total value
//return total
function budgetCalculator(w,p,l){
    var watch= w*50;
    var phone=p*100;
    var laptop=l*500;
    var total= watch+phone+laptop;

    return total;
}
var result= budgetCalculator(3,9,8);
console.log(result);
//hotelCost function
//here you have to use if else 
//in every if else function you have to count the total bill
//return bill
function hotelCost(num){
    
    if(num<=10){
        var firstTenDay= num*100;
        var totalBill= firstTenDay;
    
    }
    else if(num<=20){
        var firstTenDay= 10*100;
        var remaining = num-10;
        var secondTenDay = remaining*80;
        var totalBill= firstTenDay+secondTenDay; 

    }
    else{
        var firstTenDay= 10*100;
        var secondTenDay=10*80;
        var remaining= num-20;
        var lastDays= remaining*50;
        var totalBill= firstTenDay+secondTenDay+lastDays;
    }
    return totalBill;
}
 var result=hotelCost(13);
 console.log(result);

//mega friend funcion
//declare a null string
//compare the current string with the previous string
// return the largest string
 function megaFriend(names){
    var lgth=" ";
    for (var i = 0; i <names.length; i++) {
      var currentItem=names[i];
      if(currentItem.length>lgth.length){
        lgth=names[i];
      }
     
      
    }
    return lgth;
  
  }
     var result = megaFriend(["siam","bayazid","imran","faisal"])
     console.log(result);