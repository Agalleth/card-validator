let forms = document.getElementById("forms");
//Quitando evento por default
forms.addEventListener("submit", e => {
  e.preventDefault();
  validateCardDetails(forms);
});
//Validando tarjeta con el algoritmo Luhn pares*2//Sumar números de dos dígitos// Sumar y 10% = 0 es válida
const CardFunction = (creditCard) => {
const cardNumber=creditCard.value;
const arrayCardNumber= Array.from(cardNumber);
if(cardNumber!=0){
  creditCard.classList.add("success");
  const numberReverse= arrayCardNumber.reverse();
  for(let i=0;i<numberReverse.length;i++){
      if( i%2===1){
        numberReverse[i]=((numberReverse[i])*2);
      }
      if( i%2===0){
        numberReverse[i]=((numberReverse[i])*1);
      }
    }
  for(let i=0; i<numberReverse.length;i++){
     if (numberReverse[i]>9){
         numberReverse[i]=numberReverse[i]-9;
         }
    }
  const addArray = numberReverse.reduce(function(a, b){ return a + b; });
  const validCard= addArray%10;
    if(validCard===0){
      alert("Valid Card")
    }
    else{
      alert("Invalid Card")
    }
  }
}
const CardExpFunction = exp => {
  const year = exp.value.slice(2, 4);
  const month = exp.value.slice(5, 8);
}
const CardCvvFunction = cvv => {
}
const NameFunction = name => {
}
validateCardDetails = forms => {
  const ArrayTrans=Array.from(forms);
  const creditCard = ArrayTrans[0];
  const exp = ArrayTrans[1];
  const cvv = ArrayTrans[2];
  const name = ArrayTrans[3];
  CardFunction(creditCard);
  CardExpFunction(exp);
  CardCvvFunction(cvv);
  NameFunction(name);
}
