function isValidNumber(userNumber){
    if(userNumber.startsWith("+7") && userNumber.length == 11 && Math.floor(Number(userNumber.substr(1,10)/1000000000)) == 7 ){
         console.log("true");
     }else{
         console.log("false");
     }
 } 
 isValidNumber(prompt("nomre yazin"));
 