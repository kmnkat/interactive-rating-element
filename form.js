const group = document.getElementById("btn-group");
const groupBtns = group.querySelectorAll("button");
const userRating = document.getElementById("rate-val");
const submitRate = document.getElementById("submit-btn-rating");
let chosenRating = 0;

function buttonHandler() {
  for (let i = 0; i < groupBtns.length; i++) {
    groupBtns[i].addEventListener("click", (event) => {
      let currentValueBtn = document.querySelector(".active-btn");
      if (currentValueBtn) {
        currentValueBtn.className = currentValueBtn.className.replace(
          "active-btn",
          ""
        );
      }
      const clicked = event.target;
      console.log(clicked);
      clicked.classList.add("active-btn");
      chosenRating = event.target.value;
    });
  }
}

function submitUserRating() {
  submitRate.addEventListener("click", (eventSub) => {
    console.log(userRating.textContent);
    userRating.textContent += chosenRating;
    console.log(userRating.textContent);
  });
}
buttonHandler();
submitUserRating();
