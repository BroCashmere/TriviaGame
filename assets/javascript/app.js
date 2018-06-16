
let timer = 30;
let right = 0;
let wrong = 0;
let unanswered = 0;
let intervalId;

window.onload = function() {
  $("#submit").hide()
  $('#start-over').hide();
};

let questions = [{
  question: 'Who flips it and skips it?',
  choices: ['Artanis','Diablo','Greymane','Muradin'],
  answer: "Diablo",
  image:"assets/images/diablo.jpg"
}, {
  question: 'HOOO OHHHHHHH?',
  choices: ['Li-Ming','Valeera','Sonya','Zeratul'],
  answer: "Sonya",
  image:"assets/images/sonya.jpg"
}, {
  question: 'What is the best ult for Varian?',
  choices: ['The Colossus of Clout','Colossus Smash','Taunt','Twin Blades'],
  answer: "Twin Blades",
  image: "assets/images/twinblades.jpg"
}, {
  question: 'What is a type of Girl Scout cookie and also a team comp?',
  choices: ['Thin Mints','Trios','Samoas','Peanut Butter Sandwitch'],
  answer: "Thin Mints",
  image: "assets/images/thinmints.jpg"
}, {
  question: 'Which announcer sounds like a pedophile?',
  choices: ['El Guapo','Brightwing','Deckard Cain','Alarak'],
  answer: "Brightwing",
  image: "assets/images/alarak.jpg"
}, {
  question: 'Who do surfers like the best?',
  choices: ['Poseidon','Triton','Ragnaros','Plankton'],
  answer: "Ragnaros",
  image: "assets/images/ragnaros.jpg"
}
];

$('#start').on("click", startGame);

function startGame() {
  $('#start-over').hide();
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  $('#start').hide();
  showQuestions();
  $("#submit").show()
  $('#submit').on("click", timeUp)
}

function decrement() {
  timer--;
  $("#countdown").html("<h2>Time Remaining: " + timer + "</h2>");

  if (timer === 0) {
    timeUp();
  }

}

function timeUp() {



  
  clearInterval(intervalId);
  displayStats()
  $('#submit').hide();
  right = 0;
  wrong = 0;
  unanswered = 0;
  timer = 30;
  $('#start-over').show();
  clearInterval(intervalId);
  $('#start-over').on("click", startGame);

}

function showQuestions() {
  $("#questions").html("");
  for (i=0;i<questions.length;i++) {
      $("#questions").append(questions[i].question).append("<br><br>");
      for (let j = 0; j < questions[i].choices.length; j++) {
        $("#questions").append('<input type="radio">' + questions[i].choices[j]).append("<br><br>");
// //if answer checkbox is correct
//         if (input.checked === questions[i].answer) {
//             right++
//           }

// //if answer checkbox has not been clicked
//           if (input.checked=== false) {
//             unanswered++;
//           }
//           else wrong++;  
//         }
//       }
    }

  
  

function displayStats() {
  $("#countdown").html(`<h2>Time Remaining: 30</h2>`)
  $("#questions").html(`
    <h3>Your Score</h3>
    <h3>Correct: ${right}</h3>
    <h3>Wrong: ${wrong}</h3>
    <h3>Unanswered: ${unanswered}</h3> 
  
  `)}
