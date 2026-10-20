const questions = [
  {
    question: "You discover a locked door in a place where no door should exist. What do you do?",
    answers: [
      "Open it. If it was meant to keep me out, I'll deal with that afterward.",
      "Watch it first. Who uses the door may tell me more than what's behind it.",
      "Examine the area around it for signs that something has changed.",
      "Find out how old it is and whether anyone remembers it being there.",
      "Make sure no one else can stumble into it until I know it's safe.",
      "Question why everyone is so certain the door shouldn't exist."
    ]
  },

  {
    question: "Someone you trust tells you a secret that could hurt another person. What matters first?",
    answers: [
      "Whether keeping it allows more harm to happen.",
      "Why they chose to tell me and who else may already know.",
      "Whether anyone involved needs help before anything else happens.",
      "Whether I actually have the whole story.",
      "Protecting the people who could be caught in the consequences.",
      "Whether the secret exists because something larger has been deliberately hidden."
    ]
  },

  {
    question: "You are given authority over a group during a crisis. What comes naturally?",
    answers: [
      "Make a decision quickly and get everyone moving.",
      "Learn what everyone knows before revealing what I intend to do.",
      "Figure out who is struggling and put people where they'll function best.",
      "Look for the pattern that explains what is actually happening.",
      "Establish something dependable everyone can rally around.",
      "Ask whether the structure we're using is part of the reason we're failing."
    ]
  },

  {
    question: "You learn that a law has protected people for generations, but is hurting someone now.",
    answers: [
      "Break it if that's what protecting them requires.",
      "Work around it without drawing attention until I understand who benefits from it.",
      "Deal with the immediate harm first. The argument can happen afterward.",
      "Find out why the law was created before deciding what should replace it.",
      "Change it carefully. Destroying a safeguard without a replacement could hurt more people.",
      "Determine whether the law can be rewritten so the protection remains without the harm."
    ]
  },

  {
    question: "When you're frightened, what are you most likely to do?",
    answers: [
      "Move. Doing something feels better than waiting.",
      "Become quieter and pay attention to everything around me.",
      "Focus on something tangible I can care for, fix, or control.",
      "Try to understand exactly what I'm afraid of.",
      "Hold my ground and make sure nobody faces it alone.",
      "Mentally pull the situation apart until I can see how all its pieces connect."
    ]
  },

  {
    question: "You discover you've been lied to for years. What hurts most?",
    answers: [
      "That someone believed they had the right to decide for me.",
      "That I didn't notice sooner.",
      "The damage the lie caused while everyone protected it.",
      "Everything I believed now has to be reconsidered.",
      "Someone I trusted chose the lie over me.",
      "The lie changed more than the truth. It changed the entire structure around it."
    ]
  },

  {
    question: "You become lost somewhere unfamiliar. What's your instinct?",
    answers: [
      "Choose a direction and move. I can correct course later.",
      "Stay unseen until I understand where I am.",
      "Look for water, tracks, plants, shelter, or other signs of life.",
      "Find a high point or landmark and build a mental picture of the area.",
      "Mark where I've been so I always have a route back.",
      "Stop assuming the route I was given is the only route that exists."
    ]
  },

  {
    question: "Someone you love is in danger, but helping them puts you at serious risk.",
    answers: [
      "I'm already moving before anyone finishes explaining the risk.",
      "I'll help, but I want the advantage of surprise.",
      "Their condition determines what I do next.",
      "I need to understand the danger well enough not to make things worse.",
      "I put myself between them and whatever is coming.",
      "I look for the connection causing the danger and try to change that instead."
    ]
  },

  {
    question: "Which failure would be hardest for you to forgive in yourself?",
    answers: [
      "I hesitated when I should have acted.",
      "I trusted someone I should have watched more carefully.",
      "Someone needed me and I failed to notice.",
      "The answer was there and I stopped asking too soon.",
      "I couldn't protect something entrusted to me.",
      "I accepted the choices I was given without questioning who created them."
    ]
  },

  {
    question: "You find an ancient magical object nobody understands. What interests you first?",
    answers: [
      "What happens when it's activated.",
      "What it was designed to conceal.",
      "What it was made from and how it has survived.",
      "Who made it, when, and what they believed it did.",
      "Whether it's stable and how dangerous it could become.",
      "How its pieces interact and what rules govern those relationships."
    ]
  },

  {
    question: "Two people you respect give you completely opposite advice.",
    answers: [
      "Choose the one that feels right and accept the consequences.",
      "Pay attention to what neither person is saying.",
      "Consider who will actually be affected by each choice.",
      "Ask enough questions to understand why they disagree.",
      "Choose the path that preserves the most stability.",
      "Look for a third option neither of them considered."
    ]
  },

  {
    question: "You are told there are only five paths available to you. What is your first thought?",
    answers: [
      "Then I'll choose one and make it mine.",
      "Who decided those were the only five?",
      "Which one lets me do the most good?",
      "What happened to the paths that came before them?",
      "Which one gives me something solid to build upon?",
      "I don't believe you."
    ]
  }
];


const orderNames = [
  "Ember",
  "Veil",
  "Verdant",
  "Astral",
  "Iron"
];


const results = {
  Ember: {
    opening: "You move when others hesitate.",
    description:
      "Your instinct is action. You trust courage earned in motion and would rather face the consequences of a choice than surrender the choice entirely. You are passionate, decisive, fiercely alive, and difficult to intimidate.",
    warning:
      "Your greatest strength can also become your danger. Power without restraint consumes whatever stands nearest.",
    mark: "Your Mark burns red."
  },

  Veil: {
    opening: "You notice what others overlook.",
    description:
      "You understand that what is hidden can matter as much as what is seen. You observe before acting, guard what you reveal, and instinctively search for motives beneath words. Your strength lies in subtlety, perception, and adaptability.",
    warning:
      "But concealment carries its own danger. Hide too much of yourself for too long, and eventually even you may forget what remains beneath the Veil.",
    mark: "Your Mark awakens violet."
  },

  Verdant: {
    opening: "You understand that survival is a living thing.",
    description:
      "You notice needs. You adapt. You nurture what can grow and remove what threatens it. Compassion and practicality coexist easily in you because protecting life sometimes requires gentleness and sometimes something sharper.",
    warning:
      "Your greatest danger is giving too much of yourself to what you're trying to save.",
    mark: "Your Mark awakens green."
  },

  Astral: {
    opening: "You cannot leave a question unanswered.",
    description:
      "Meaning matters to you. So do memory, history, possibility, and the invisible threads connecting what happened to what comes next. You seek understanding before certainty.",
    warning:
      "But there are questions deep enough to swallow the person asking them.",
    mark: "Your Mark awakens gold."
  },

  Iron: {
    opening: "When everything moves, you become the thing that doesn't.",
    description:
      "You protect. You endure. You build structures capable of surviving pressure and become the person others instinctively stand beside when things begin to fall apart. Reliability is one of your greatest strengths.",
    warning:
      "But strength held too rigidly can become its own kind of prison.",
    mark: "Your Mark awakens blue."
  }
};


let currentQuestion = 0;

let scores = {
  Ember: 0,
  Veil: 0,
  Verdant: 0,
  Astral: 0,
  Iron: 0
};


const startScreen = document.getElementById("awakening-start");
const quizScreen = document.getElementById("awakening-quiz");
const resultScreen = document.getElementById("awakening-result");

const beginButton = document.getElementById("begin-awakening");

const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("awakening-progress-bar");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");

const resultOrder = document.getElementById("result-order");
const resultOpening = document.getElementById("result-opening");
const resultDescription = document.getElementById("result-description");
const resultWarning = document.getElementById("result-warning");
const resultMark = document.getElementById("result-mark");
const secondaryOrder = document.getElementById("secondary-order");


beginButton.addEventListener("click", beginAssessment);


function beginAssessment() {
  startScreen.hidden = true;
  quizScreen.hidden = false;

  currentQuestion = 0;

  scores = {
    Ember: 0,
    Veil: 0,
    Verdant: 0,
    Astral: 0,
    Iron: 0
  };

  showQuestion();
}


function showQuestion() {
  const question = questions[currentQuestion];

  questionNumber.textContent =
    `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / 12`;

  progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  questionText.textContent = question.question;

  answerOptions.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-option";

    const letter = String.fromCharCode(65 + index);

    button.innerHTML =
      `<span class="answer-letter">${letter}.</span>${answer}`;

    button.addEventListener("click", () => {
      chooseAnswer(index);
    });

    answerOptions.appendChild(button);
  });
}


function chooseAnswer(answerIndex) {

  /*
    TEMPORARY RECOGNIZED-ORDER SCORING

    A = Ember
    B = Veil
    C = Verdant
    D = Astral
    E = Iron

    F receives one recognized affinity for now.

    Our complete hidden Eclipsed scoring matrix
    will replace/extend this after the basic quiz
    has passed testing.
  */

  if (answerIndex < 5) {
    const order = orderNames[answerIndex];
    scores[order] += 2;
  }

  if (answerIndex === 5) {
    /*
      Temporary F behavior:
      award +1 Astral.

      This is ONLY for interface testing.
      Final F scoring will vary by question.
    */
    scores.Astral += 1;
  }


  currentQuestion++;


  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishAssessment();
  }
}


function finishAssessment() {
  quizScreen.hidden = true;

  const rankedOrders =
    Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);

  const primary = rankedOrders[0][0];
  const secondary = rankedOrders[1][0];

  showRecognizedResult(primary, secondary);
}


function showRecognizedResult(primary, secondary) {
  const result = results[primary];

  resultOrder.textContent =
    `${primary.toUpperCase()} ORDER`;

  resultOpening.textContent =
    result.opening;

  resultDescription.textContent =
    result.description;

  resultWarning.textContent =
    result.warning;

  resultMark.textContent =
    result.mark;

  secondaryOrder.textContent =
    secondary.toUpperCase();

  resultScreen.hidden = false;
}


document
  .querySelectorAll(".retake-assessment")
  .forEach((button) => {

    button.addEventListener("click", () => {

      resultScreen.hidden = true;

      document.getElementById("eclipsed-sequence").hidden = true;
      document.getElementById("eclipsed-result").hidden = true;

      startScreen.hidden = false;

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  });
