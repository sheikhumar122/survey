// document.addEventListener("DOMContentLoaded", function() {
//     const welcomeScreen = document.getElementById("welcomeScreen");
//     const startButton = document.getElementById("startButton");
//     const surveyContainer = document.getElementById("surveyContainer");
//     const questionNumberElement = document.getElementById("questionNumber");
//     const questionElement = document.getElementById("question");
//     const answerContainer = document.getElementById("answerContainer");
//     const previousButton = document.getElementById("previousButton");
//     const nextButton = document.getElementById("nextButton");
//     const skipButton = document.getElementById("skipButton");
  
//     // Define your questions
//     const questions = [
//       {
//         id: 1,
//         question: "How satisfied are you with our products?",
//         type: "rating",
//         minRating: 1,
//         maxRating: 5
//       },
//       {
//         id: 2,
//         question: "How fair are the prices compared to similar retailers?",
//         type: "rating",
//         minRating: 1,
//         maxRating: 5
//       },
//       {
//         id: 3,
//         question: "How satisfied are you with the value for money of your purchase?",
//         type: "rating",
//         minRating: 1,
//         maxRating: 5
//       },
//       {
//         id: 4,
//         question: "On a scale of 1-10, how likely are you to recommend us to your friends and family?",
//         type: "rating",
//         minRating: 1,
//         maxRating: 10
//       },
//       {
//         id: 5,
//         question: "What could we do to improve our service?",
//         type: "text"
//       }
//     ];
  
//     let currentQuestionIndex = 0;
//     let customerSessionId = generateSessionId();
  
//     startButton.addEventListener("click", function() {
//       welcomeScreen.style.display = "none";
//       surveyContainer.style.display = "block";
//       showQuestion(currentQuestionIndex);
//     });
  
//     previousButton.addEventListener("click", function() {
//       currentQuestionIndex--;
//       showQuestion(currentQuestionIndex);
//     });
  
//     nextButton.addEventListener("click", function() {
//       if (currentQuestionIndex === questions.length - 1) {
//         // Last question, finish survey
//         finishSurvey();
//       } else {
//         currentQuestionIndex++;
//         showQuestion(currentQuestionIndex);
//       }
//     });
  
//     skipButton.addEventListener("click", function() {
//       if (currentQuestionIndex === questions.length - 1) {
//         // Last question, finish survey
//         finishSurvey();
//       } else {
//         currentQuestionIndex++;
//         showQuestion(currentQuestionIndex);
//       }
//     });
  
//     function showQuestion(questionIndex) {
//         const currentQuestion = questions[questionIndex];
//         questionNumberElement.textContent = `Question ${questionIndex + 1}/${questions.length}`;
//         questionElement.textContent = currentQuestion.question;
      
//         answerContainer.innerHTML = ""; // Clear previous answers
      
//         if (currentQuestion.type === "rating") {
//           for (let rating = currentQuestion.minRating; rating <= currentQuestion.maxRating; rating++) {
//             const radioBtn = document.createElement("input");
//             radioBtn.type = "radio";
//             radioBtn.name = `question_${currentQuestion.id}`;
//             radioBtn.value = rating;
//             answerContainer.appendChild(radioBtn);
      
//             const label = document.createElement("label");
//             label.textContent = rating;
//             answerContainer.appendChild(label);
//           }
//         } else if (currentQuestion.type === "text") {
//           const textInput = document.createElement("textarea");
//           textInput.name = `question_${currentQuestion.id}`;
//           answerContainer.appendChild(textInput);
//         }
      
//         if (questionIndex === 0) {
//           previousButton.style.display = "none"; // Hide "Previous" button on the first question
//         } else {
//           previousButton.style.display = "inline";
//         }
      
//         if (questionIndex === questions.length - 1) {
//           nextButton.textContent = "Finish";
//         } else {
//           nextButton.textContent = "Next";
//         }
//       }
      
//     function finishSurvey() {
//         const answers = {};
      
//         for (const question of questions) {
//           if (question.type === "rating") {
//             const selectedRating = document.querySelector(`input[name="question_${question.id}"]:checked`);
      
//             if (selectedRating) {
//               answers[question.id] = selectedRating.value;
//             } else {
//               answers[question.id] = null;
//             }
//           } else if (question.type === "text") {
//             const input = document.querySelector(`textarea[name="question_${question.id}"]`);
      
//             if (input.value.trim() !== "") {
//               answers[question.id] = input.value;
//             } else {
//               answers[question.id] = null;
//             }
//           }
//         }
      
//         localStorage.setItem(`survey_${customerSessionId}`, JSON.stringify(answers));
      
//         surveyContainer.innerHTML = "<h2>Thank you for completing the survey!</h2>";
//       }
      
  
//     function generateSessionId() {
//       // Generate a unique session ID using a suitable method
//       // For simplicity, we'll use a random 8-character alphanumeric string
//       const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//       let sessionId = "";
  
//       for (let i = 0; i < 8; i++) {
//         sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
//       }
  
//       return sessionId;
//     }
//   });
document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const startButton = document.getElementById("startButton");
    const surveyContainer = document.getElementById("surveyContainer");
    const questionNumberElement = document.getElementById("questionNumber");
    const questionElement = document.getElementById("question");
    const answerContainer = document.getElementById("answerContainer");
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    const skipButton = document.getElementById("skipButton");
  
    // Define your questions
    const questions = [
      {
        id: 1,
        question: "How satisfied are you with our products?",
        type: "rating",
        minRating: 1,
        maxRating: 5
      },
      {
        id: 2,
        question: "How fair are the prices compared to similar retailers?",
        type: "rating",
        minRating: 1,
        maxRating: 5
      },
      {
        id: 3,
        question: "How satisfied are you with the value for money of your purchase?",
        type: "rating",
        minRating: 1,
        maxRating: 5
      },
      {
        id: 4,
        question: "On a scale of 1-10, how likely are you to recommend us to your friends and family?",
        type: "rating",
        minRating: 1,
        maxRating: 10
      },
      {
        id: 5,
        question: "What could we do to improve our service?",
        type: "text"
      }
    ];
  
    let currentQuestionIndex = 0;
    let customerSessionId = generateSessionId();
    let answers = {}; // Store answers globally
  
    startButton.addEventListener("click", function() {
      welcomeScreen.style.display = "none";
      surveyContainer.style.display = "block";
      showQuestion(currentQuestionIndex);
    });
  
    previousButton.addEventListener("click", function() {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    });
  
    nextButton.addEventListener("click", function() {
      saveAnswer(currentQuestionIndex); // Save answer before moving to the next question
  
      if (currentQuestionIndex === questions.length - 1) {
        // Last question, finish survey
        finishSurvey();
      } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      }
    });
  
    skipButton.addEventListener("click", function() {
      saveAnswer(currentQuestionIndex); // Save answer before skipping to the next question
  
      if (currentQuestionIndex === questions.length - 1) {
        // Last question, finish survey
        finishSurvey();
      } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      }
    });
  
    function showQuestion(questionIndex) {
      const currentQuestion = questions[questionIndex];
      questionNumberElement.textContent = `Question ${questionIndex + 1}/${questions.length}`;
      questionElement.textContent = currentQuestion.question;
  
      answerContainer.innerHTML = ""; // Clear previous answers
  
      if (currentQuestion.type === "rating") {
        for (let rating = currentQuestion.minRating; rating <= currentQuestion.maxRating; rating++) {
          const radioBtn = document.createElement("input");
          radioBtn.type = "radio";
          radioBtn.name = `question_${currentQuestion.id}`;
          radioBtn.value = rating;
          answerContainer.appendChild(radioBtn);
  
          const label = document.createElement("label");
          label.textContent = rating;
          answerContainer.appendChild(label);
        }
      } else if (currentQuestion.type === "text") {
        const textInput = document.createElement("textarea");
        textInput.name = `question_${currentQuestion.id}`;
        answerContainer.appendChild(textInput);
      }
  
      if (questionIndex === 0) {
        previousButton.style.display = "none"; // Hide "Previous" button on the first question
      } else {
        previousButton.style.display = "inline";
      }
  
      if (questionIndex === questions.length - 1) {
        nextButton.textContent = "Finish";
      } else {
        nextButton.textContent = "Next";
      }
    }
  
    function saveAnswer(questionIndex) {
      const currentQuestion = questions[questionIndex];
  
      if (currentQuestion.type === "rating") {
        const selectedRating = document.querySelector(`input[name="question_${currentQuestion.id}"]:checked`);
  
        if (selectedRating) {
          answers[currentQuestion.id] = selectedRating.value;
        } else {
          answers[currentQuestion.id] = null;
        }
      } else if (currentQuestion.type === "text") {
        const input = document.querySelector(`textarea[name="question_${currentQuestion.id}"]`);
  
        if (input.value.trim() !== "") {
          answers[currentQuestion.id] = input.value;
        } else {
          answers[currentQuestion.id] = null;
        }
      }
    }
  
    function finishSurvey() {
      localStorage.setItem(`survey_${customerSessionId}`, JSON.stringify(answers));
      surveyContainer.innerHTML = "<h2>Thank you for completing the survey!</h2>";
    }
  
    function generateSessionId() {
      // Generate a unique session ID using a suitable method
      // For simplicity, we'll use a random 8-character alphanumeric string
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let sessionId = "";
  
      for (let i = 0; i < 8; i++) {
        sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      return sessionId;
    }
  });
  