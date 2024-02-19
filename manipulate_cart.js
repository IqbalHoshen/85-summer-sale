
const ratingElements = document.getElementsByClassName("RatingPart");

for (let i = 0; i < ratingElements.length; i++) {
  ratingElements[i].innerHTML = `<div class="rating">
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" checked/>
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
  </div>`;
  ratingElements[i].classList.add('flex', 'justify-center', 'mt-4');
}

function cardPrice(amountID) {
  const textPriceLine = document.getElementById(amountID);
  const textPrice = textPriceLine.innerText;
  const floatPrice = parseFloat(textPrice);

  // previous total price
  const addAmount = document.getElementById('Total_price');
  const previousTotal = parseFloat(addAmount.innerText);
  const newTotal = previousTotal + floatPrice;

  // Update the total price
  addAmount.innerText = newTotal.toFixed(2);

  // Declare applyButton outside so it's accessible
  const applyButton = document.getElementById('applyButton');

  // Make Purchase
  if (newTotal > 0) {
    makePurchase.disabled = false;
  } else {
    makePurchase.disabled = true;
  }

  // Check for discount when the coupon is applied
  if (newTotal >= 200) {

    document.getElementById('couponCode').addEventListener('input', function () {
      const couponCode = this.value.trim();

      if (couponCode === "SELL200") {
        applyButton.disabled = false;
      } else {
        applyButton.disabled = true;
      }
    });
    applyButton.addEventListener('click', function () {
      discountFunction(newTotal);
    });
  }


  // Update total amount when discount is not applied
  if (newTotal < 200 || applyButton.disabled) {
    let TotalAmount = document.getElementById('totalPrice');
    TotalAmount.innerText = newTotal.toFixed(2);
  }
}

function discountFunction(newTotalPrice) {
  const discount = newTotalPrice * 0.2;
  const DisAmount = document.getElementById('DiscountAmount');
  DisAmount.innerText = discount.toFixed(2);

  const newTotalAmount = newTotalPrice - discount;
  let TotalAmount = document.getElementById('totalPrice');
  TotalAmount.innerText = newTotalAmount.toFixed(2);
}


function selectedItems(productName, amountID) {
  const addItemId = document.getElementById(productName);
  const ItemInnerText = addItemId.innerText;
  const count = showItems.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-3');
  p.innerHTML = `${count + 1}. ${ItemInnerText}`
  showItems.appendChild(p);
  cardPrice(amountID);
}


function goHome() {

  window.location.href = "http://127.0.0.1:5500/index.html";
}