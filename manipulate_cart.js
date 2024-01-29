
const ratingElements = document.getElementsByClassName("RatingPart");

// Loop through each element in the collection
for (let i = 0; i < ratingElements.length; i++) {
  // Set innerHTML for each element
  ratingElements[i].innerHTML = `<div class="rating">
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" checked/>
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
    <input type="radio" name="rating-${i}" class="mask mask-star-2 bg-[#FFC107]" />
  </div>`;

  // Add classes to each element
  ratingElements[i].classList.add('flex', 'justify-center', 'mt-4');
}
