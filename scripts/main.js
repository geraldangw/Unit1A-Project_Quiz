$(document).ready(function() {

  //VARIABLES TO BE DECLARED GLOBALLY FOR USE ACROSS FUNCTIONS. USUALLY GOT TO DO WITH PLAYER INTERFACE ASPECTS//
  var turn = 0; //STARTING THE TURN FROM 0. THIS DRIVES THE GAME THROUGH THE QUESTIONS.
  var questionnum = 1; //thIS IS TO DISPLAY QUESTION NUMBER FOR EASY REFERENCE
  var playeronescore = 0; //KEEPING RECORD OF PLAYER SCORES//
  var playertwoscore = 0;
  var id1; //SETS INTERVALS FOR PLAYER TIMER BAR AND USED TO CLEAR INTERVALS//
  var id2;
  var outcomeA; //SETS INTERVAL FOR PLAYER RESULT AND USED TO CLEAR INTERVAL WHEN TURN === 20 AND THE WINNER IS TO BE DECIDED//
  var outcomeB;
  var audioclock = new Audio('audio/clocktick.mp3'); //AUDIO FILES TO BE PLAYED ACROSS GAMEPLAY//
  var audioreload = new Audio('audio/reload.mp3');
  var audioright = new Audio('audio/right.mp3');
  var audiowin = new Audio('audio/win.mp3');
  var audiodraw = new Audio('audio/draw.mp3');
  var audiowrong = new Audio('audio/wrong.mp3');
  var audioslide = new Audio('audio/slider.wav');
  var width = 1;

  var questionsdb = { //AN INITIAL LIST OF 20 QUESTIONS. CAN ADD MORE OR POTENTIALLY DIFFERENT TOPICS//
    //QUESTIONS STORAGE (MORE QUESTIONS TO BE ADDED HERE)//

    questions: [
      "WDI is easy.",
      "In Star Wars, Han Solo's ship is The USS Enterprise.",
      "388 / 4 === 97",
      "The lead actor of World War Z is Tom Cruise.",
      "Popeye’s nephews were called Peepeye, Poopeye, Pipeye and Pupeye.",
      "In Portugal you can be fined if caught driving whilst wearing flip-flops.",
      "In China, you cannot use Facebook and YouTube but Twitter is permitted for use.",
      "The ostrich is the fastest bird on foot.",
      "The first president of Singapore is Benjamin Sheares.",
      "Miley Cyrus is the daughter of country singer Billy Ray Cyrus.",
      "Leonardo Da Vinci is a Spanish painter who is famous for The Vitruvian Man.",
      "An infant whale is called a calf.",
      "Our PM, Lee Hsien Loong is a Senior Wrangler when he was at Cambridge.",
      "Sarabi is Simba's mother in the Lion King.",
      "The moon is the closest star to Earth.",
      "Fans of Taylor Swift are called Tay Tays.",
      "Clorophobia is the phobia of Clowns.",
      "U2 is the music group that won the most Grammys ever.",
      "If you were to place the planet Saturn in water, it would float!",
      "A dentist invented the electric chair."
    ],
    answers: [
      //ANSWERS STORAGE (CORRESPONDING ANSWERS TO BE ADDED HERE)//
      "FALSE",
      "FALSE",
      "TRUE",
      "FALSE",
      "TRUE",
      "TRUE",
      "FALSE",
      "TRUE",
      "FALSE",
      "TRUE",
      "FALSE",
      "TRUE",
      "TRUE",
      "TRUE",
      "FALSE",
      "FALSE",
      "FALSE",
      "TRUE",
      "TRUE",
      "TRUE"
    ],
    explanations: [
      //EXPLANATIONS STORAGE. CUSTOMIZED RESPONSE BY QUESTION EVERYTIME USER GETS IT WRONG//
      "Obviously, its not!",
      "The USS Enterprise is from Star Trek. Millenium Falcon dummy!",
      "I used a calculator. Trust me.",
      "I know. Sometimes I confuse Brad and Tom too. ",
      "I am worried one of them doesn't just eat Spinach for strength.",
      "Yes! You get fined close to 200 euros for this transgression.",
      "Go big or go home. All 3 social media platforms are banned.",
      "They are when their heads are not in the ground.",
      "Yusof Bin Ishak is. That's why he is on most of our dollar bills!",
      "From daddy's Achy Breaky Heart to daughter's Wrecking Ball.",
      "Leonardo is Italian, por favor.",
      "Sharing the same prototype as a cow, apparently.",
      "LHL did get the greatest intellectual achievement in UK.",
      "I know, I didn't notice mommy lion too.",
      "The moon is not a star. The sun is the closest star to earth.",
      "They are called Swifties. I wouldn't want to be called Tay Tays.",
      "Coulrophobia is the right word. Either way, scary.",
      "I was thinking Spice Girls. Damn its just U2.",
      "True. That would have to be a big bowl of water though.",
      "Alfred P. Southwick, Dentist, Electric Chair inventor."
    ],
    drinks: [
      //DRINKS TO BE LISTED FOR THE LOSER WHEN THE GAME ENDS//
      "a shot of vodka followed by a glass of champagne (bottoms up!)",
      "a can of beer in 30 seconds.",
      "5 shots of tequila. You can get a friend to help!",
      "one shot of whisky in one can of beer (bottoms up!)",
      "drink half a can of beer every 5 minutes for the next half an hour!"
    ]
  };

  //FUNCTION FOR INSTRUCTIONS BAR SLIDER WITH AUDIO FILE//
  function instrSlider() {
    var instrlink = $('#instructionslink');
    instrlink.click(function() {
      var instrtext = $('#instructionstext');
      instrtext.slideToggle(100, 'linear', function() {
        audioslide.play();
      });
    });
  }

  instrSlider();

  //FUNCTION FOR RESET BUTTON WITH AUDIO FILE//
  function resetGame() {
    var clearBoard = $('#reset');
    clearBoard.click(function() {
      location.reload();
      audioreload.play();
    });
  }

  resetGame();

  //GAMEPLAY FUNCTIONS STARTS HERE//

  //START GAME ON CLICKING START BUTTON//
  var start = $('#start');

  function startGame() {
    start.click(gamePlayStart);
  }

  startGame();

  //FUNCTION THAT RUNS THE GAME WHENEVER THE PLAYER CLICKS ON TRUE OR FALSE//
  function playerSelect() {
    var playerchoice = $('.box');
    playerchoice.click(checkAnswer);
  }

  playerSelect();

  //GAME INITIATION VIA START BUTTON//
  function gamePlayStart() {
    audioclock.play();
    if (turn % 2 === 0) {
      playerOneTurn();
    }
    start.off('click');
    start.css('cursor', 'none');
  }

  //GAME PLAY VIA CHECKING OF TURN BETWEEN PLAYER ONE AND PLAYER TWO //
  function turnCheck() {
    audioclock.play();
    if (turn % 2 === 0) {
      playerOneTurn();
      checkAnswer();
    } else {
      playerTwoTurn();
      checkAnswer();
    }
  }

  //PLAYER 1 AND PLAYER 2 TURN ANIMATION + TIMER BAR INITIALIZATION AND TURN INCREASE//
  function playerOneTurn() {
    $('.darkfonttheme').css('background-color', '#81C3D7');
    $('.yellowfonttheme').css('color', '#81C3D7');
    $('#headertext').html("PLAYER ONE'S TURN");
    $('#comments').html("QUESTION " + questionnum);
    $('#start').css('background-color', '#888888');
    $('#reset').css('cursor', 'pointer');
    $('#reset').css('color', '#FFC145');
    $('#questionheader').html("STATEMENT");
    $('#ptwoscorebar').css('background-color', '#FE5D26');
    $('#questioncontainer').css('border', '2px solid #81C3D7');
    $('#questiontext').html(questionsdb.questions[turn]);
    start.html("CLICK BELOW");
    width = 1;
    id1 = setInterval(timerBarOne, 30);
    turn++;
  }

  function playerTwoTurn() {
    $('.darkfonttheme').css('background-color', '#FE5D26');
    $('.yellowfonttheme').css('color', '#FE5D26');
    $('#headertext').html("PLAYER TWO'S TURN");
    $('#comments').html("QUESTION " + questionnum);
    $('#start').css('background-color', '#888888');
    $('#reset').css('cursor', 'pointer');
    $('#reset').css('color', '#FFC145');
    $('#questionheader').html("STATEMENT");
    $('#ponescorebar').css('background-color', '#81C3D7');
    $('#questioncontainer').css('border', '2px solid #FE5D26');
    $('#questiontext').html(questionsdb.questions[turn]);
    questionnum++;
    width = 1;
    id2 = setInterval(timerBarTwo, 30);
    turn++;
  }

  //CALLED FUNCTION TO CHECK ANSWER WHENEVER A PLAYER CHOOSES TRUE OR FALSE. ANIMATION FOR RIGHT OR WRONG AS WELL AS A TRIGGER UPON TURN 20 TO CHECK WINNER//
  function checkAnswer() {
    if ($(event.target).text() === questionsdb.answers[turn-1]) {
      audioclock.pause();
      audioright.play();
      clearInterval(id1);
      clearInterval(id2);
      $('.darkfonttheme').css('background-color', '#5EFC8D'); //ANIMATION FOR RIGHT ANSWER STARTS HERE//
      $('.yellowfonttheme').css('color', '#5EFC8D');
      $('#reset').css('color', '#FFC145');
      $('#headertext').html("CORRECT!");
      $('#comments').html("MOVING ALONG...");
      $('#questionheader').html("AWESOME!");
      $('#questiontext').html("YOU CLEVER LITTLE THING! GOOD FOR YOU!");
      $('#questioncontainer').css('border', '2px solid #5EFC8D');
      if (turn % 2 === 0) { //INCREASE SCORE OF PLAYER ONE OR PLAYER TWO UPON GETTING THE CORRECT ANSWER//
        playertwoscore++;
      } else {
        playeronescore++;
      }
      $('#ponescorebar').html("P1: " + playeronescore + "/10"); //REFLECTING SCORES//
      $('#ptwoscorebar').html("P2: " + playertwoscore + "/10");
    } else {
      audioclock.pause(); //ANIMATION FOR WRONG ANSWER STARTS HERE//
      audiowrong.play();
      clearInterval(id1);
      clearInterval(id2);
      $('.darkfonttheme').css('background-color', '#DA344D');
      $('.yellowfonttheme').css('color', '#DA344D');
      $('#reset').css('color', '#FFC145');
      $('#headertext').html("WRONG!");
      $('#comments').html("PLEASE TRY HARDER..WON'T YOU?");
      $('#questionheader').html('BOO!');
      $('#questiontext').html(questionsdb.explanations[turn-1]);
      $('#questioncontainer').css('border', '2px solid #DA344D');
    }
    if (turn === 20) { //TRIGGER CHECKWIN FUNCTION UPON TURN 20//
      checkWin();
    } else {
      outcomeA = setTimeout(turnCheck, 2500); //IF NOT CONTINUE GAME VIA TURNCHECK FUNCTION//
    }
  }

  function checkWin() {
    clearTimeout(outcomeA);
    clearTimeout(outcomeB);
    if (playeronescore > playertwoscore) {
      $('#headertext').html("PLAYER ONE WINS!");
      audiowin.play();
      $('.box').off('click');
      $('.box').css('cursor', 'none');
      $('.darkfonttheme').css('background-color', '#81C3D7');
      $('.yellowfonttheme').css('color', '#81C3D7');
      $('#reset').css('color', '#FFC145');
      $('#comments').html("PLAY TILL SOMEONE DROPS!");
      $('#questionheader').css('background-color', '#DA344D');
      $('#questionheader').html('BOO TO PLAYER TWO!');
      $('#questiontext').html("For your loss, you need to drink " + questionsdb.drinks[1]);
      $('#questioncontainer').css('border', '2px solid #DA344D');
    } else if (playeronescore < playertwoscore) {
      $('#headertext').html("PLAYER TWO WINS!");
      audiowin.play();
      $('.box').off('click');
      $('.box').css('cursor', 'none');
      $('.darkfonttheme').css('background-color', '#FE5D26');
      $('.yellowfonttheme').css('color', '#FE5D26');
      $('#reset').css('color', '#FFC145');
      $('#comments').html("PLAY TILL SOMEONE DROPS!");
      $('#questionheader').css('background-color', '#DA344D');
      $('#questionheader').html('BOO TO PLAYER ONE!');
      $('#questiontext').html("For your loss, you need to drink " + questionsdb.drinks[2]);
      $('#questioncontainer').css('border', '2px solid #DA344D');
    } else {
      $('#headertext').html("IT'S A DRAW!");
      audiodraw.play();
      $('.box').off('click');
      $('.box').css('cursor', 'none');
      $('.darkfonttheme').css('background-color', '#A2ABAB');
      $('.yellowfonttheme').css('color', '#A2ABAB');
      $('#reset').css('color', '#FFC145');
      $('#comments').html("TRY AGAIN!");
      $('#questionheader').html('BORING!');
      $('#questiontext').html("And I thought you were thirsty!");
      $('#questioncontainer').css('border', '2px solid #A2ABAB');
    }
  }

  //CALLED FUNCTIONS FOR P1 AND P2 WITH SETINTERVAL FOR TIMERBAR ANIMATION//
  function timerBarOne() {
    var bar1 = $('#playeronebar');
    if (width >= 24.1) {
      clearInterval(id1);
      timeOut();
    } else {
      width += 0.1;
      bar1.css('width', width + '%');
      bar1.css('background-color', '#81C3D7');
      var bar2 = $('#playertwobar');
      bar2.css('background-color', '#5D6872');
    }
  }

  function timerBarTwo() {
    var bar2 = $('#playertwobar');
    if (width >= 24.1) {
      clearInterval(id2);
      timeOut();
    } else {
      width += 0.1;
      bar2.css('width', width + '%');
      bar2.css('background-color', '#FE5D26');
      var bar1 = $('#playeronebar');
      bar1.css('background-color', '#5D6872');
    }
  }

  //FUNCTION TRIGGERED WHEN TIME RUNS OUT FOR THE USER, SHOWS TIME OUT ANIMATION AND MOVES ON TO NEXT TURN//
  function timeOut() {
    audioclock.pause();
    audiowrong.play();
    $('.darkfonttheme').css('background-color', '#DA344D');
    $('.yellowfonttheme').css('color', '#DA344D');
    $('#reset').css('color', '#FFC145');
    $('#headertext').html("YOUR TIME IS UP!");
    $('#comments').html("THERE'S A 50% CHANCE EVEN IF YOU GUESS!");
    $('#questionheader').html('BOO!');
    $('#questiontext').html("THINK FASTER NEXT TIME.");
    $('#questioncontainer').css('border', '2px solid #DA344D');
    setTimeout(turnCheck, 1700);
  }

});
