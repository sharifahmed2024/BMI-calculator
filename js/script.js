let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let Calculate = document.querySelector(".Calculate");
let BMI = document.querySelector(".BMI");
let Result = document.querySelector(".Result");
let heighterror = document.querySelector(".heighterror");
let weighterror = document.querySelector(".weighterror");
let female = document.querySelector(".femalebtn");
let male = document.querySelector(".malebtn");


Calculate.addEventListener("click" , function(){
   if(height.value == ""){
    heighterror.innerHTML = "Height is missing!"
}
else{
    heighterror.innerHTML = "";
}

if(weight.value == ""){
    weighterror.innerHTML = "Weight is missing!"
}
else{
    weighterror.innerHTML = "";
}
});



male.addEventListener("click" , function(){
   Calculate.addEventListener("click" , function(){
    if(height.value != "" &&  weight.value != ""){

        let bmi = (weight.value * 2.20462 / (height.value * height.value)) * 703;
        
        
        BMI.innerHTML = "BMI: " + bmi.toFixed(2);
      
      
        if(bmi >= 18.5 && bmi <= 24.9) {
          Result.innerHTML = "Result: " + "healthy weight";
        } 
        else if(bmi < 18.5){
          Result.innerHTML = "Result: " + "Under weight";
        }
        else{
          Result.innerHTML = "Result: " + "Over weight";
        }
      
        
      }
      
      
      })
   });


   female.addEventListener("click" , function(){
    Calculate.addEventListener("click" , function(){
     if(height.value != "" &&  weight.value != ""){
 
         let bmi = (weight.value * 2.20 / (height.value * height.value)) * 703;
         
         
         BMI.innerHTML = "BMI: " + bmi.toFixed(2);
       
       
         if(bmi >= 18.5 && bmi <= 24.9) {
           Result.innerHTML = "Result: " + "healthy weight";
         } 
         else if(bmi < 18.5){
           Result.innerHTML = "Result: " + "Under weight";
         }
         else{
           Result.innerHTML = "Result: " + "Over weight";
         }
       
         
       }
       
       
       })
    });



