const questions = document.querySelectorAll(".question");
const prevButton = document.getElementById("prevbtn");
const nextButton = document.getElementById("nextbtn");
let currentQuestionIndex = 0;

function showQuestion(index) {
  questions.forEach((question, idx) => {
    question.style.display = idx === index ? "block" : "none";
  });
}

function validateQuestion(index) {
  const inputs = questions[index].querySelectorAll("input, select");
  for (const input of inputs) {
    if (input.required && !input.value) {
      return false;
    }
  }
  return true;
}

function showSummary() {
  const form = document.getElementById("form");
  const summarySection = document.getElementById("summarySection");
  const summaryList = document.getElementById("summaryList");

  form.style.display = "none";
  summarySection.style.display = "block";
  summaryList.innerHTML = "";

  questions.forEach((question, index) => {
    const input = question.querySelector("input, select");
    if (input) {
      const label = question.querySelector("label").innerText;
      const value = input.value;
      const summaryItem = document.createElement("li");
      summaryItem.textContent = `${label}: ${value}`;
      summaryList.appendChild(summaryItem);
    }
  });
}

function showQuestion(index) {
  questions.forEach((question, idx) => {
    question.style.display = idx === index ? "block" : "none";
  });

  if (index === questions.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

prevButton.addEventListener("click", () => {
  currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
  showQuestion(currentQuestionIndex);
});

nextButton.addEventListener("click", () => {
  if (validateQuestion(currentQuestionIndex)) {
    currentQuestionIndex = Math.min(questions.length - 1, currentQuestionIndex + 1);
    showQuestion(currentQuestionIndex);
  }
});

const submitButton = document.querySelector(".button");
submitButton.style.display = "none";
submitButton.addEventListener("click", () => {
  if (validateQuestion(currentQuestionIndex)) {
    alert("Taotlus täidetud");
    showSummary();
    prevButton.style.display = "none";
    submitButton.style.display = "none";
    thankYouMessage.style.display = "block";
  }
});

showQuestion(currentQuestionIndex);





