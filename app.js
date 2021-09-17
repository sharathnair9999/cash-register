var billAmount  = document.querySelector("#bill")
var cashGiven = document.querySelector("#cash-given")
var checkBtn = document.querySelector("#check")

function validateChange(){
  var bill = Number(billAmount.value)
  var cash = Number(cashGiven.value)
 if( bill<cash ){
   console.log(cash-bill)
 }
 else{
   console.log("Enter valid bill and cash")
 }
}

checkBtn.addEventListener("click", validateChange)