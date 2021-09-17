var billAmount  = document.querySelector("#bill")
var cashGiven = document.querySelector("#cash-given")
var checkBtn = document.querySelector("#check")
var outputMessage = document.querySelector("#outputMsg")
var noOfNote = document.querySelectorAll(".noOfNotes")
var notes = [2000, 500, 100, 20, 10, 5, 1]
cashGiven.style.display = bill<=0
function validateChange(){
  var bill = Number(billAmount.value)
  var cash = Number(cashGiven.value)
  var balanceCash = Number(cash-bill)
  // outputMessage.style.display = "none"
 if( bill<cash ){
  outputMessage.innerHTML = "Balance cash to be returned is "+balanceCash
  calculateChange(balanceCash)
 }
 else if(bill===0||cash===0){
  outputMessage.innerHTML =  "Please enter both the fields"
 }
 else{
  outputMessage.innerHTML ="Enter valid bill and cash"
 }
}
function calculateChange(balanceCash){
  for(let i =0;i<notes.length;i++){
    const noOfNotes = Math.trunc(balanceCash/notes[i]);
    balanceCash = balanceCash%notes[i];
    noOfNote[i].innerText = noOfNotes;
  }
}

checkBtn.addEventListener("click", validateChange)