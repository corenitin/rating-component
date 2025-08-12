const ratingComponent = document.getElementById("ratingComponent");
const ratingNumbers = document.getElementById("ratingNumbers");
const thankYouComponent = document.getElementById("thankYouComponent");
const selectedRatingSpan = document.getElementById("selectedRatingSpan");

thankYouComponent.style.display = "none";

const ratings = [1, 2, 3, 4, 5];
let givenRate;
const spans = [];

ratings.map((rate) => {
  const span = document.createElement("span");
  

  //style
  span.style.fontFamily = "'Overpass', sans-serif";
  span.style.fontWeight = "700";
  span.style.fontSize = "15px";
  span.style.width = "2.5rem";
  span.style.height = "2.5rem";
  span.style.display = "flex";
  span.style.justifyContent = "center";
  span.style.alignItems = "center";
  span.style.color = "hsl(217, 12%, 63%)";
  span.style.background = "hsl(213, 19%, 18%)";
  span.style.borderRadius = "100%";
  span.style.cursor = "pointer";
  span.textContent = rate;

  // mouse events
  span.addEventListener("mouseover", () => {
    span.style.backgroundColor = "hsl(25, 97%, 53%)";
    span.style.color = "hsl(213, 19%, 18%)";
  });
  span.addEventListener("mouseout", () => {
    span.style.backgroundColor = "hsl(213, 19%, 18%)";
    span.style.color = "hsl(217, 12%, 63%)";
  });

  span.addEventListener("click", () => {
    givenRate = rate;
    // Update all span styles based on selected rating
    spans.forEach((span, i) => {
      if (ratings[i] <= givenRate) {
        span.style.backgroundColor = "hsl(0, 100%, 100%)";
        span.style.color = "hsl(213, 19%, 18%)";
      } 
    });
  });

  ratingNumbers.appendChild(span);
  spans.push(span);
});

function submit() {
  ratingComponent.style.display = "none";
  thankYouComponent.style.display = "block";
  selectedRatingSpan.textContent = givenRate;   
}
