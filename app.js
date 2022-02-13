

function updateProductNumber(product , price ,isIncreasing){
      const productInput =document.getElementById(product +'-number')
      let productNumber = productInput.value

      if(isIncreasing==true){
            productNumber =parseInt (productNumber) +1
      }
      else if(productNumber > 0){
            productNumber =parseInt(productNumber) -1
      }
      productInput.value =productNumber

      // update total Number

      const productTotal =document.getElementById(product +'-total')
      productTotal.innerText = productNumber * price

      // calculateTotal
      calculateTotal()
      
      
}
function getInputValue(product){
      const productInput =document.getElementById(product +'-number')
      const productNumber =parseInt(productInput.value)
      return productNumber
}

function calculateTotal(){
      
      const phoneTotal = getInputValue('phone') *1219
      const caseTotal =getInputValue('case') *50

      const subTotal =phoneTotal + caseTotal
      const taxAmount = subTotal /10
      const totalPrice = taxAmount + subTotal
//      update total price

      document.getElementById('sub-total').innerText =subTotal
      document.getElementById('tax-amount').innerText =taxAmount
      document.getElementById('total-price').innerText =totalPrice
}


// phone increase decrease evnsts

document.getElementById('phone-plus').addEventListener('click',function(){
      updateProductNumber('phone', 1200, true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
      updateProductNumber('phone', 1200, false)
})

// handel case increase decrease evnts

document.getElementById('case-plus').addEventListener('click', function(){
      updateProductNumber('case', 50, true)
})

document.getElementById('case-minus').addEventListener('click', function(){
      updateProductNumber('case',50, false)
      
      
})