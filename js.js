const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const element = document.querySelector('.celebration-animation-wrapper'); 
const confetti = document.querySelector('.confetti');

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    num.addEventListener("animationend", (e) =>
      handleAnimationEnd(e, num, idx)
    );
  });
}

function handleAnimationEnd(e, num, idx) {
  const { animationName } = e;
  const nextToLast = nums.length - 1;

  if (animationName === "goIn" && idx !== nextToLast) {
    num.classList.remove("in");
    num.classList.add("out");
  } else if (animationName === "goOut" && num.nextElementSibling) {
    num.nextElementSibling.classList.add("in");
  } else {
    setTimeout(() => {
      counter.classList.add("hide");
      finalMessage.classList.add("show");
      element.classList.remove('hide'); // Select a specific element
      confetti.classList.remove('hide'); 
    }, 1000); // Adjust the delay as needed
  }
}