$(document).ready(function() {

  var turn = 0;
  var questionnum = 1;
  var playeronescore = 0;
  var playertwoscore = 0;
  var id1;
  var id2;
  var outcomeA;
  var outcomeB;

  var questionsdb = {
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
      "Obviously, its not!",
      "The USS Enterprise is from Star Trek. Millenium Falcon dummy!",
      "I used a calculator. Trust me.",
      "I know. Sometimes I confuse Brad and Tom too. ",
      "I am worried one of them doesn't just eat Spinach for strength.",
      "Yes! You get fined close to 200 euros for this transgression.",
      "Go big or go home. All 3 social media platforms are banned.",
      "They are when their heads are not in the ground.",
      "Yusof Bin Ishak is. That's why he is on most of our dollar bills!",
      "!From daddy's Achy Breaky Heart to daughter's Wrecking Ball.",
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
      "a shot of vodka followed by a glass of champagne (bottoms up!)",
      "a can of beer in 30 seconds.",
      "5 shots of tequila. You can get a friend to help!",
      "one shot of whisky in one can of beer (bottoms up!)",
      "drink half a can of beer every 5 minutes for the next half an hour!"
    ]
  };

  var instrlink = $('#instructionslink');
  var instrtext = $('#instructionstext');
  instrlink.click(function() {
    instrtext.slideToggle(100, 'linear', function() {});
  });

  var start = $('#start');
  start.click(gamePlayStart);

  var playerchoice = $('.box');
  playerchoice.click(checkWin);
  var audioclock = new Audio('clocktick.mp3');

  function gamePlayStart() {
    audioclock.play();
    if (turn % 2 === 0) {
      var title1 = $('#title');
      title1.html("PLAYER ONE'S TURN");
      title1.css('color', '#81C3D7');
      var comments1 = $('#comments');
      comments1.html("QUESTION " + questionnum);
      var commentsbox1 = $('#result');
      commentsbox1.css('background-color', '#81C3D7');
      var questionhead1 = $('#questionheader');
      questionhead1.css('background-color', '#81C3D7');
      // var instructionstop1 = $('#instructionslink');
      // instructionstop1.css('background-color', '#81C3D7');
      var statement1 = $('#questiontext');
      statement1.css('color', '#81C3D7');
      statement1.html(questionsdb.questions[turn]);
      var playerone = $('#playerone');
      playerone.css('background-color', '#81C3D7');
      var playertwo = $('#playertwo');
      playertwo.css('background-color', '#FE5D26');
      start.html("CLICK BELOW");
      start.css('font-size', '1.5em');
      start.css('background-color', '#888888');
      var questionboard1 = $('#questionboard');
      questionboard1.css('border', '2px solid #81C3D7');
      var width1 = 1;
      id1 = setInterval(function() {
        var bar1 = $('#playeronebar');
        if (width1 >= 23.85) {
          clearInterval(id1);
        } else {
          width1 += 0.1;
          bar1.css('width', width1 + '%');
          bar1.css('background-color', '#81C3D7');
          var bar2 = $('#playertwobar');
          bar2.css('background-color', '#5D6872');
        }
      }, 30);
      turn++;
    } else {
      var title2 = $('#title');
      title2.html("PLAYER TWO'S TURN");
      title2.css('color', '#FE5D26');
      var comments2 = $('#comments');
      comments2.html("QUESTION " + questionnum);
      var commentsbox2 = $('#result');
      commentsbox2.css('background-color', '#FE5D26');
      var questionhead2 = $('#questionheader');
      questionhead2.css('background-color', '#FE5D26');
      // var instructionstop2 = $('#instructionslink');
      // instructionstop2.css('background-color', '#FE5D26');
      var statement2 = $('#questiontext');
      statement2.css('color', '#FE5D26');
      statement2.html(questionsdb.questions[turn]);
      var questionboard2 = $('#questionboard');
      questionboard2.css('border', '2px solid #FE5D26');
      questionnum++;
      var width2 = 1;
      id2 = setInterval(function() {
        var bar2 = $('#playertwobar');
        if (width2 >= 23.85) {
          clearInterval(id2);
        } else {
          width2 += 0.1;
          bar2.css('width', width2 + '%');
          bar2.css('background-color', '#FE5D26');
          var bar1 = $('#playeronebar');
          bar1.css('background-color', '#5D6872');
        }
      }, 30);
      turn++;
    }
    start.off('click');
    start.css('cursor', 'none');
  }

  function gamePlayChoice() {
    audioclock.play();
    if (turn % 2 === 0) {
      var title1 = $('#title');
      title1.html("PLAYER ONE'S TURN");
      title1.css('color', '#81C3D7');
      var comments1 = $('#comments');
      comments1.html("QUESTION " + questionnum);
      var commentsbox1 = $('#result');
      commentsbox1.css('background-color', '#81C3D7');
      var questionhead1 = $('#questionheader');
      questionhead1.css('background-color', '#81C3D7');
      questionhead1.html("STATEMENT");
      // var instructionstop1 = $('#instructionslink');
      // instructionstop1.css('background-color', '#81C3D7');
      var statement1 = $('#questiontext');
      statement1.css('color', '#81C3D7');
      statement1.html(questionsdb.questions[turn]);
      var playerone1 = $('#playerone');
      playerone1.css('background-color', '#81C3D7');
      var playertwo1 = $('#playertwo');
      playertwo1.css('background-color', '#FE5D26');
      start.html("CLICK BELOW");
      start.css('font-size', '1.5em');
      start.css('background-color', '#888888');
      var questionboard1 = $('#questionboard');
      questionboard1.css('border', '2px solid #81C3D7');
      var width1 = 1;
      id1 = setInterval(function() {
        var bar1 = $('#playeronebar');
        if (width1 >= 23.85) {
          clearInterval(id1);
        } else {
          width1 += 0.1;
          bar1.css('width', width1 + '%');
          bar1.css('background-color', '#81C3D7');
          var bar2 = $('#playertwobar');
          bar2.css('background-color', '#5D6872');
        }
      }, 30);
      turn++;
      checkWin();
    } else {
      var title2 = $('#title');
      title2.html("PLAYER TWO'S TURN");
      title2.css('color', '#FE5D26');
      var comments2 = $('#comments');
      comments2.html("QUESTION " + questionnum);
      var commentsbox2 = $('#result');
      commentsbox2.css('background-color', '#FE5D26');
      var questionhead2 = $('#questionheader');
      questionhead2.css('background-color', '#FE5D26');
      questionhead2.html("STATEMENT");
      // var instructionstop2 = $('#instructionslink');
      // instructionstop2.css('background-color', '#FE5D26');
      var statement2 = $('#questiontext');
      statement2.css('color', '#FE5D26');
      statement2.html(questionsdb.questions[turn]);
      var playerone2 = $('#playerone');
      playerone2.css('background-color', '#81C3D7');
      var playertwo2 = $('#playertwo');
      playertwo2.css('background-color', '#FE5D26');
      var questionboard2 = $('#questionboard');
      questionboard2.css('border', '2px solid #FE5D26');
      questionnum++;
      var width2 = 1;
      id2 = setInterval(function() {
        var bar2 = $('#playertwobar');
        if (width2 >= 23.85) {
          clearInterval(id2);
        } else {
          width2 += 0.1;
          bar2.css('width', width2 + '%');
          bar2.css('background-color', '#FE5D26');
          var bar1 = $('#playeronebar');
          bar1.css('background-color', '#5D6872');
        }
      }, 30);
      turn++;
      checkWin();
    }
  }


  function clearTheBoard() {
    var cleartheboard = $('#reset');
    cleartheboard.click(function() {
      location.reload();
    });
  }

  clearTheBoard();


  function checkWin() {
    if ($(event.target).text() === questionsdb.answers[turn - 1]) {
      audioclock.pause();
      var audioright = new Audio('right.mp3');
      audioright.play();
      clearInterval(id1);
      clearInterval(id2);
      var titleA = $('#title');
      titleA.html("CORRECT!");
      titleA.css('color', '#5EFC8D');
      var commentsA = $('#comments');
      commentsA.html("GOOD STUFF!");
      var commentsboxA = $('#result');
      commentsboxA.css('background-color', '#5EFC8D');
      var questionheadA = $('#questionheader');
      questionheadA.css('background-color', '#5EFC8D');
      questionheadA.html("AWESOME!");
      var playeroneA = $('#playerone');
      playeroneA.css('background-color', '#5EFC8D');
      var playertwoA = $('#playertwo');
      playertwoA.css('background-color', '#5EFC8D');
      // var instructionstopA = $('#instructionslink');
      // instructionstopA.css('background-color', '#5EFC8D');
      var statementA = $('#questiontext');
      statementA.css('color', '#5EFC8D');
      statementA.html("YOU CLEVER LITTLE THING! GOOD FOR YOU!");
      var questionboardA = $('#questionboard');
      questionboardA.css('border', '2px solid #5EFC8D');
      if (turn % 2 === 0) {
        playertwoscore++;
      } else {
        playeronescore++;
      }
      playeroneA.html("P1: " + playeronescore + "/10");
      playertwoA.html("P2: " + playertwoscore + "/10");
      if (turn === 20) {
        clearTimeout(outcomeA);
        clearTimeout(outcomeA);
        if (playeronescore > playertwoscore) {
          titleA.html("PLAYER ONE WINS!");
          var audiowinA1 = new Audio('win.mp3');
          audiowinA1.play();
          start.off('click');
          start.css('cursor', 'none');
          var trueboxA1 = $('#truebox');
          trueboxA1.off('click');
          trueboxA1.css('cursor', 'none');
          var falseboxA1 = $('#falsebox');
          falseboxA1.off('click');
          falseboxA1.css('cursor', 'none');
          titleA.css('color', '#81C3D7');
          commentsA.html("PLAY TILL SOMEONE DROPS!");
          commentsboxA.css('background-color', '#81C3D7');
          questionheadA.css('background-color', '#DA344D');
          questionheadA.html('BOO TO PLAYER TWO!');
          playeroneA.css('background-color', '#81C3D7');
          playertwoA.css('background-color', '#81C3D7');
          statementA.css('color', '#81C3D7');
          statementA.html("For your loss, you need to drink " + questionsdb.drinks[1]);
          questionboardA.css('border', '2px solid #DA344D');
        } else if (playeronescore < playertwoscore) {
          titleA.html("PLAYER TWO WINS!");
          var audiowinB1 = new Audio('win.mp3');
          audiowinB1.play();
          start.off('click');
          start.css('cursor', 'none');
          var trueboxB1 = $('#truebox');
          trueboxB1.off('click');
          trueboxB1.css('cursor', 'none');
          var falseboxB1 = $('#falsebox');
          falseboxB1.off('click');
          falseboxB1.css('cursor', 'none');
          titleA.css('color', '#FE5D26');
          commentsA.html("PLAY TILL SOMEONE DROPS!");
          commentsboxA.css('background-color', '#FE5D26');
          questionheadA.css('background-color', '#DA344D');
          questionheadA.html('BOO TO PLAYER ONE!');
          playeroneA.css('background-color', '#FE5D26');
          playertwoA.css('background-color', '#FE5D26');
          statementA.css('color', '#FE5D26');
          statementA.html("For your loss, you need to drink " + questionsdb.drinks[2]);
          questionboardA.css('border', '2px solid #DA344D');
        } else {
          titleA.html("IT'S A DRAW!");
          titleA.css('color', '#A2ABAB');
          var audiodraw1 = new Audio('draw.mp3');
          audiodraw1.play();
          start.off('click');
          start.css('cursor', 'none');
          var trueboxC1 = $('#truebox');
          trueboxC1.off('click');
          trueboxC1.css('cursor', 'none');
          var falseboxC1 = $('#falsebox');
          falseboxC1.off('click');
          falseboxC1.css('cursor', 'none');
          commentsA.html("TRY AGAIN!");
          commentsboxA.css('background-color', '#A2ABAB');
          questionheadA.css('background-color', '#A2ABAB');
          questionheadA.html('BORING!');
          playeroneA.css('background-color', '#A2ABAB');
          playertwoA.css('background-color', '#A2ABAB');
          statementA.css('color', 'A2ABAB');
          statementA.html("And I thought you were thirsty!");
          questionboardA.css('border', '2px solid #A2ABAB');
        }
      } else {
        outcomeA = setTimeout(gamePlayChoice, 2500);
      }
    } else {
      audioclock.pause();
      var audiowrong = new Audio('wrong.mp3');
      audiowrong.play();
      clearInterval(id1);
      clearInterval(id2);
      var titleB = $('#title');
      titleB.html("WRONG!");
      titleB.css('color', '#DA344D');
      var commentsB = $('#comments');
      commentsB.html("PLEASE TRY HARDER..WON'T YOU? PURLEEASSSEEE");
      var commentsboxB = $('#result');
      commentsboxB.css('background-color', '#DA344D');
      var questionheadB = $('#questionheader');
      questionheadB.css('background-color', '#DA344D');
      questionheadB.html('AWESOME!');
      var playeroneB = $('#playerone');
      playeroneB.css('background-color', '#DA344D');
      var playertwoB = $('#playertwo');
      playertwoB.css('background-color', '#DA344D');
      // var instructionstopB = $('#instructionslink');
      // instructionstopB.css('background-color', '#DA344D');
      var statementB = $('#questiontext');
      statementB.css('color', '#DA344D');
      statementB.html(questionsdb.explanations[turn - 1]);
      var questionboardB = $('#questionboard');
      questionboardB.css('border', '2px solid #DA344D');
      playeroneB.html("P1: " + playeronescore + "/10");
      playertwoB.html("P2: " + playertwoscore + "/10");
      if (turn === 20) {
        clearTimeout(outcomeB);
        clearTimeout(outcomeB);
        if (playeronescore > playertwoscore) {
          titleB.html("PLAYER ONE WINS!");
          var audiowinA2 = new Audio('win.mp3');
          audiowinA2.play();
          start.off('click');
          start.css('cursor', 'none');
          var trueboxA2 = $('#truebox');
          trueboxA2.off('click');
          trueboxA2.css('cursor', 'none');
          var falseboxA2 = $('#falsebox');
          falseboxA2.off('click');
          falseboxA2.css('cursor', 'none');
          titleB.css('color', '#81C3D7');
          commentsB.html("PLAY TILL SOMEONE DROPS!");
          commentsboxB.css('background-color', '#81C3D7');
          questionheadB.css('background-color', '#DA344D');
          questionheadB.html('BOO TO PLAYER TWO!');
          playeroneB.css('background-color', '#81C3D7');
          playertwoB.css('background-color', '#81C3D7');
          statementB.css('color', '#81C3D7');
          statementB.html("For your loss, you need to drink " + questionsdb.drinks[1]);
          questionboardB.css('border', '2px solid #DA344D');
        } else if (playeronescore < playertwoscore) {
          titleB.html("PLAYER TWO WINS!");
          var audiowinB2 = new Audio('win.mp3');
          audiowinB2.play();
          start.off('click');
          start.css('cursor', 'none');
          var trueboxB2 = $('#truebox');
          trueboxB2.off('click');
          trueboxB2.css('cursor', 'none');
          var falseboxB2 = $('#falsebox');
          falseboxB2.off('click');
          falseboxB2.css('cursor', 'none');
          titleB.css('color', '#FE5D26');
          commentsB.html("PLAY TILL SOMEONE DROPS!");
          commentsboxB.css('background-color', '#FE5D26');
          questionheadB.css('background-color', '#DA344D');
          questionheadB.html('BOO TO PLAYER ONE!');
          playeroneB.css('background-color', '#FE5D26');
          playertwoB.css('background-color', '#FE5D26');
          statementB.css('color', '#FE5D26');
          statementB.html("For your loss, you need to drink " + questionsdb.drinks[2]);
          questionboardB.css('border', '2px solid #DA344D');
        } else {
          titleB.html("IT'S A DRAW!");
          titleB.css('color', '#A2ABAB');
          var audiodraw2 = new Audio('draw.mp3');
          audiodraw2.play();
          start.off('click');
          start.css('cursor', 'none');
          var trueboxC2 = $('#truebox');
          trueboxC2.off('click');
          trueboxC2.css('cursor', 'none');
          var falseboxC2 = $('#falsebox');
          falseboxC2.off('click');
          falseboxC2.css('cursor', 'none');
          commentsB.html("TRY AGAIN!");
          commentsboxB.css('background-color', '#A2ABAB');
          questionheadB.css('background-color', '#A2ABAB');
          questionheadB.html('BORING!');
          playeroneB.css('background-color', '#A2ABAB');
          playertwoB.css('background-color', '#A2ABAB');
          statementB.css('color', 'A2ABAB');
          statementB.html("And I thought you were thirsty!");
          questionboardB.css('border', '2px solid #A2ABAB');
        }
      } else {
        outcomeB = setTimeout(gamePlayChoice, 2500);
      }
    }
  }
});
