/* =========================================
   THE OFFICIAL VEYR AWAKENING ASSESSMENT
========================================= */


/* =========================================
   QUESTIONS
========================================= */

const questions = [
  {
    question:
      "You discover a locked door in a place where no door should exist. What do you do?",
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
    question:
      "Someone you trust tells you a secret that could hurt another person. What matters first?",
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
    question:
      "You are given authority over a group during a crisis. What comes naturally?",
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
    question:
      "You learn that a law has protected people for generations, but is hurting someone now.",
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
    question:
      "When you're frightened, what are you most likely to do?",
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
    question:
      "You discover you've been lied to for years. What hurts most?",
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
    question:
      "You become lost somewhere unfamiliar. What's your instinct?",
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
    question:
      "Someone you love is in danger, but helping them puts you at serious risk.",
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
    question:
      "Which failure would be hardest for you to forgive in yourself?",
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
    question:
      "You find an ancient magical object nobody understands. What interests you first?",
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
    question:
      "Two people you respect give you completely opposite advice.",
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
    question:
      "You are told there are only five paths available to you. What is your first thought?",
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


/* =========================================
   RECOGNIZED ORDERS
========================================= */

const orderNames = [
  "Ember",
  "Veil",
  "Verdant",
  "Astral",
  "Iron"
];


/* =========================================
   OFFICIAL ORDER VISUALS
========================================= */

const orderVisuals = {

  Ember: {
    color: "#B83A3A",
    symbol: "assets/ember-symbol.png",
    alt: "Ember Order symbol"
  },

  Veil: {
    color: "#6F4A8E",
    symbol: "assets/veil-symbol.png",
    alt: "Veil Order symbol"
  },

  Verdant: {
    color: "#4F7A4E",
    symbol: "assets/verdant-symbol.png",
    alt: "Verdant Order symbol"
  },

  Astral: {
    color: "#C69A3B",
    symbol: "assets/astral-symbol.png",
    alt: "Astral Order symbol"
  },

  Iron: {
    color: "#4D6F8A",
    symbol: "assets/iron-symbol.png",
    alt: "Iron Order symbol"
  },

  Eclipsed: {
    color: "#1F1B24",
    symbol: "assets/eclipsed-symbol.png?v=2",
    alt: "Eclipsed Order symbol"
  }

};


/* =========================================
   RESULT PROFILES
========================================= */

const results = {

  Ember: {
    opening:
      "You move when others hesitate.",
    description:
      "Your instinct is action. You trust courage earned in motion and would rather face the consequences of a choice than surrender the choice entirely. You are passionate, decisive, fiercely alive, and difficult to intimidate.",
    warning:
      "Your greatest strength can also become your danger. Power without restraint consumes whatever stands nearest.",
    mark:
      "Your Mark burns red."
  },

  Veil: {
    opening:
      "You notice what others overlook.",
    description:
      "You understand that what is hidden can matter as much as what is seen. You observe before acting, guard what you reveal, and instinctively search for motives beneath words. Your strength lies in subtlety, perception, and adaptability.",
    warning:
      "But concealment carries its own danger. Hide too much of yourself for too long, and eventually even you may forget what remains beneath the Veil.",
    mark:
      "Your Mark awakens violet."
  },

  Verdant: {
    opening:
      "You understand that survival is a living thing.",
    description:
      "You notice needs. You adapt. You nurture what can grow and remove what threatens it. Compassion and practicality coexist easily in you because protecting life sometimes requires gentleness and sometimes something sharper.",
    warning:
      "Your greatest danger is giving too much of yourself to what you're trying to save.",
    mark:
      "Your Mark awakens green."
  },

  Astral: {
    opening:
      "You cannot leave a question unanswered.",
    description:
      "Meaning matters to you. So do memory, history, possibility, and the invisible threads connecting what happened to what comes next. You seek understanding before certainty.",
    warning:
      "But there are questions deep enough to swallow the person asking them.",
    mark:
      "Your Mark awakens gold."
  },

  Iron: {
    opening:
      "When everything moves, you become the thing that doesn't.",
    description:
      "You protect. You endure. You build structures capable of surviving pressure and become the person others instinctively stand beside when things begin to fall apart. Reliability is one of your greatest strengths.",
    warning:
      "But strength held too rigidly can become its own kind of prison.",
    mark:
      "Your Mark awakens blue."
  }

};


/* =========================================
   HIDDEN SCORING MATRIX

   Traits:
   relational  = relational perception
   structural  = structural thinking
   questioning = system questioning
   rewrite     = Rewrite instinct
========================================= */

const scoringMatrix = [

  // QUESTION 1
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },
    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    { orders: { Iron: 2 } },

    {
      orders: { Astral: 1, Veil: 1 },
      eclipsed: 2,
      traits: ["questioning", "structural"]
    }
  ],


  // QUESTION 2
  [
    { orders: { Ember: 2 } },

    {
      orders: { Veil: 2 },
      eclipsed: 1,
      traits: ["relational"]
    },

    { orders: { Verdant: 2 } },
    { orders: { Astral: 2 } },

    {
      orders: { Iron: 2 },
      eclipsed: 1,
      traits: ["relational"]
    },

    {
      orders: { Veil: 1, Astral: 1 },
      eclipsed: 2,
      traits: ["questioning", "structural"]
    }
  ],


  // QUESTION 3
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },

    {
      orders: { Verdant: 2 },
      eclipsed: 1,
      traits: ["relational"]
    },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["structural"]
    },

    { orders: { Iron: 2 } },

    {
      orders: { Astral: 1, Iron: 1 },
      eclipsed: 2,
      traits: ["structural", "questioning"]
    }
  ],


  // QUESTION 4
  [
    { orders: { Ember: 2 } },

    {
      orders: { Veil: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["structural"]
    },

    {
      orders: { Iron: 2 },
      eclipsed: 2,
      traits: ["relational", "rewrite"]
    },

    {
      orders: { Astral: 1, Iron: 1 },
      eclipsed: 2,
      traits: ["rewrite", "structural"]
    }
  ],


  // QUESTION 5
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },
    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    {
      orders: { Iron: 2 },
      eclipsed: 1,
      traits: ["relational"]
    },

    {
      orders: { Astral: 1, Veil: 1 },
      eclipsed: 2,
      traits: ["structural", "relational"]
    }
  ],


  // QUESTION 6
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },
    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    { orders: { Iron: 2 } },

    {
      orders: { Astral: 1, Veil: 1 },
      eclipsed: 2,
      traits: ["structural", "relational"]
    }
  ],


  // QUESTION 7
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },
    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["structural"]
    },

    { orders: { Iron: 2 } },

    {
      orders: { Astral: 1, Ember: 1 },
      eclipsed: 2,
      traits: ["questioning", "rewrite"]
    }
  ],


  // QUESTION 8
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },

    {
      orders: { Verdant: 2 },
      eclipsed: 1,
      traits: ["relational"]
    },

    { orders: { Astral: 2 } },
    { orders: { Iron: 2 } },

    {
      orders: { Verdant: 1, Astral: 1 },
      eclipsed: 2,
      traits: ["relational", "rewrite"]
    }
  ],


  // QUESTION 9
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },
    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    { orders: { Iron: 2 } },

    {
      orders: { Astral: 1, Veil: 1 },
      eclipsed: 2,
      traits: ["questioning", "structural"]
    }
  ],


  // QUESTION 10
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },
    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    {
      orders: { Iron: 2 },
      eclipsed: 1,
      traits: ["structural"]
    },

    {
      orders: { Astral: 1, Iron: 1 },
      eclipsed: 2,
      traits: ["relational", "structural"]
    }
  ],


  // QUESTION 11
  [
    { orders: { Ember: 2 } },
    { orders: { Veil: 2 } },

    {
      orders: { Verdant: 2 },
      eclipsed: 1,
      traits: ["relational"]
    },

    { orders: { Astral: 2 } },
    { orders: { Iron: 2 } },

    {
      orders: { Astral: 1, Ember: 1 },
      eclipsed: 2,
      traits: ["rewrite", "structural"]
    }
  ],


  // QUESTION 12
  [
    { orders: { Ember: 2 } },

    {
      orders: { Veil: 2 },
      eclipsed: 1,
      traits: ["questioning"]
    },

    { orders: { Verdant: 2 } },

    {
      orders: { Astral: 2 },
      eclipsed: 1,
      traits: ["questioning", "structural"]
    },

    { orders: { Iron: 2 } },

    {
      orders: { Veil: 1, Astral: 1 },
      eclipsed: 2,
      traits: ["questioning"]
    }
  ]

];


/* =========================================
   ASSESSMENT STATE
========================================= */

let currentQuestion = 0;

let scores = {
  Ember: 0,
  Veil: 0,
  Verdant: 0,
  Astral: 0,
  Iron: 0
};

let eclipsedScore = 0;

let eclipsedTraits = {
  relational: 0,
  structural: 0,
  questioning: 0,
  rewrite: 0
};

let fCount = 0;


/* =========================================
   PAGE ELEMENTS
========================================= */

const startScreen =
  document.getElementById("awakening-start");

const quizScreen =
  document.getElementById("awakening-quiz");

const resultScreen =
  document.getElementById("awakening-result");

const eclipsedSequence =
  document.getElementById("eclipsed-sequence");

const eclipsedResult =
  document.getElementById("eclipsed-result");

const beginButton =
  document.getElementById("begin-awakening");

const questionNumber =
  document.getElementById("question-number");

const progressBar =
  document.getElementById("awakening-progress-bar");

const questionText =
  document.getElementById("question-text");

const answerOptions =
  document.getElementById("answer-options");

const resultSymbol =
  document.getElementById("result-symbol");

const resultOrder =
  document.getElementById("result-order");

const resultOpening =
  document.getElementById("result-opening");

const resultDescription =
  document.getElementById("result-description");

const resultWarning =
  document.getElementById("result-warning");

const resultMark =
  document.getElementById("result-mark");

const secondaryOrder =
  document.getElementById("secondary-order");


/* =========================================
   START ASSESSMENT
========================================= */

beginButton.addEventListener(
  "click",
  beginAssessment
);


function beginAssessment() {

  resetVisualState();

  startScreen.hidden = true;
  resultScreen.hidden = true;
  eclipsedSequence.hidden = true;
  eclipsedResult.hidden = true;

  quizScreen.hidden = false;

  currentQuestion = 0;

  scores = {
    Ember: 0,
    Veil: 0,
    Verdant: 0,
    Astral: 0,
    Iron: 0
  };

  eclipsedScore = 0;

  eclipsedTraits = {
    relational: 0,
    structural: 0,
    questioning: 0,
    rewrite: 0
  };

  fCount = 0;

  showQuestion();
}


/* =========================================
   DISPLAY QUESTION
========================================= */

function showQuestion() {

  const question =
    questions[currentQuestion];

  questionNumber.textContent =
    `QUESTION ${String(currentQuestion + 1)
      .padStart(2, "0")} / ${questions.length}`;

  progressBar.style.width =
    `${((currentQuestion + 1) /
      questions.length) * 100}%`;

  questionText.textContent =
    question.question;

  answerOptions.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.type = "button";
      button.className = "answer-option";

      const letter =
        String.fromCharCode(65 + index);

      button.innerHTML =
        `<span class="answer-letter">${letter}.</span>${answer}`;

      button.addEventListener(
        "click",
        () => chooseAnswer(index)
      );

      answerOptions.appendChild(button);

    }
  );
}


/* =========================================
   SCORE ANSWER
========================================= */

function chooseAnswer(answerIndex) {

  const scoring =
    scoringMatrix[currentQuestion][answerIndex];


  Object.entries(scoring.orders)
    .forEach(([order, points]) => {
      scores[order] += points;
    });


  if (scoring.eclipsed) {
    eclipsedScore += scoring.eclipsed;
  }


  if (scoring.traits) {

    scoring.traits.forEach((trait) => {
      eclipsedTraits[trait] += 1;
    });

  }


  if (answerIndex === 5) {
    fCount++;
  }


  currentQuestion++;


  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    finishAssessment();

  }
}


/* =========================================
   CALCULATE RESULT
========================================= */

function finishAssessment() {

  quizScreen.hidden = true;


  const rankedOrders =
    Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);


  const primary =
    rankedOrders[0][0];

  const secondary =
    rankedOrders[1][0];


  const activeTraits =
    Object.values(eclipsedTraits)
      .filter((value) => value > 0)
      .length;


  const meaningfulAffinities =
    Object.values(scores)
      .filter((score) => score >= 4)
      .length;


  const qualifiesForEclipsed =
    eclipsedScore >= 13 &&
    activeTraits >= 3 &&
    meaningfulAffinities >= 3 &&
    fCount <= 7;


  if (qualifiesForEclipsed) {

    beginEclipsedSequence();

    return;
  }


  showRecognizedResult(
    primary,
    secondary
  );
}


/* =========================================
   STANDARD ORDER RESULT
========================================= */

function showRecognizedResult(
  primary,
  secondary
) {

  const result =
    results[primary];

  const visual =
    orderVisuals[primary];


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


  resultSymbol.innerHTML = "";

  const symbol =
    document.createElement("img");

  symbol.src =
    visual.symbol;

  symbol.alt =
    visual.alt;

  symbol.className =
    "awakening-result-symbol";

  resultSymbol.appendChild(symbol);


  document.documentElement.style.setProperty(
    "--result-order-color",
    visual.color
  );

  resultScreen.dataset.order =
    primary.toLowerCase();

  resultScreen.hidden = false;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   ECLIPSED CLASSIFICATION FAILURE
========================================= */

async function beginEclipsedSequence() {

  const classificationCheck =
    document.getElementById(
      "classification-check"
    );

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  const normalDelay =
    reducedMotion ? 100 : 650;

  const finalDelay =
    reducedMotion ? 150 : 1200;


  classificationCheck.innerHTML = "";

  eclipsedSequence.hidden = false;


  const checks = [
    "EMBER",
    "VEIL",
    "VERDANT",
    "ASTRAL",
    "IRON"
  ];


  await wait(normalDelay);


  for (const order of checks) {

    const row =
      document.createElement("div");

    row.className =
      "classification-row";

    row.innerHTML =
      `<span>${order}</span>
       <span class="classification-dots"></span>
       <span class="no-match">NO MATCH</span>`;

    classificationCheck.appendChild(row);


    requestAnimationFrame(() => {
      row.classList.add("visible");
    });


    await wait(normalDelay);

  }


  await wait(finalDelay);


  const failure =
    document.createElement("div");

  failure.className =
    "classification-failure";

  failure.textContent =
    "RESULT: NO RECOGNIZED ORDER FOUND";

  classificationCheck.appendChild(failure);


  requestAnimationFrame(() => {
    failure.classList.add("visible");
  });


  await wait(finalDelay);


  document.body.classList.add(
    "eclipsed-awakening"
  );


  await wait(
    reducedMotion ? 100 : 900
  );


  eclipsedSequence.hidden = true;

  prepareEclipsedResult();

  eclipsedResult.hidden = false;


  window.scrollTo({
    top: 0,
    behavior:
      reducedMotion ? "auto" : "smooth"
  });
}


/* =========================================
   ECLIPSED RESULT VISUAL
========================================= */

function prepareEclipsedResult() {

  let symbolContainer =
    eclipsedResult.querySelector(
      ".eclipsed-result-symbol"
    );


  if (!symbolContainer) {

    symbolContainer =
      document.createElement("div");

    symbolContainer.className =
      "eclipsed-result-symbol";


    const heading =
      eclipsedResult.querySelector("h1, h2");

    if (heading) {

      heading.insertAdjacentElement(
        "beforebegin",
        symbolContainer
      );

    } else {

      eclipsedResult.prepend(
        symbolContainer
      );

    }

  }


  symbolContainer.innerHTML = "";


  const symbol =
    document.createElement("img");

  symbol.src =
    orderVisuals.Eclipsed.symbol;

  symbol.alt =
    orderVisuals.Eclipsed.alt;

  symbol.className =
    "awakening-eclipsed-symbol";


  symbolContainer.appendChild(symbol);

}


/* =========================================
   RESET VISUAL STATE
========================================= */

function resetVisualState() {

  document.body.classList.remove(
    "eclipsed-awakening"
  );


  document.documentElement.style.removeProperty(
    "--result-order-color"
  );


  resultScreen.removeAttribute(
    "data-order"
  );


  if (resultSymbol) {
    resultSymbol.innerHTML = "";
  }


  const eclipsedSymbol =
    eclipsedResult.querySelector(
      ".eclipsed-result-symbol"
    );

  if (eclipsedSymbol) {
    eclipsedSymbol.remove();
  }


  const classificationCheck =
    document.getElementById(
      "classification-check"
    );

  if (classificationCheck) {
    classificationCheck.innerHTML = "";
  }

}


/* =========================================
   TIMING HELPER
========================================= */

function wait(milliseconds) {

  return new Promise(
    (resolve) => {
      setTimeout(resolve, milliseconds);
    }
  );

}


/* =========================================
   RETAKE ASSESSMENT
========================================= */

document
  .querySelectorAll(".retake-assessment")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        quizScreen.hidden = true;
        resultScreen.hidden = true;
        eclipsedSequence.hidden = true;
        eclipsedResult.hidden = true;

        resetVisualState();

        startScreen.hidden = false;

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  });
