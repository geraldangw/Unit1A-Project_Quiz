$(document).ready(function() {

  var turn = 0;
  var questionnum = 1;
  var playeronescore = 0;
  var playertwoscore = 0;

  var questionsdb = {
    questions: [
      "WDI is easy.",
      "In Star Wars, Han Solo's ship is The Enterprise.",
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
      "The Enterprise is from Star Trek. Millenium Falcon dummy!",
      "I used a calculator. Trust me.",
      "I know. Sometimes I confuse Brad and Tom too. ",
      "I am worried one of them doesn't just eat Spinach for strength.",
      "Yes! You get fined close to 200 euros for this transgression.",
      "Go big or go home. All 3 social media platforms are banned.",
      "When their heads are not in the ground.",
      "Yusof Bin Ishak is. That's why he is on most of our dollar bills!",
      "From Achy Breaky Heart to Wrecking Ball.",
      "Leonardo is Italian, por favor.",
      "Sharing the same prototype as a cow, apparently.",
      "Senior Wrangler is considered the greatest intellectual achievement in UK.",
      "I know, I didn't notice mommy lion too.",
      "The moon is not a star. The sun is the closest star to earth.",
      "They are called Swifties. I wouldn't want to be called Tay Tays.",
      "Coulrophobia is the right word. Either way, scary.",
      "I was thinking Spice Girls. I was wrong.",
      "That would have to be a big bowl of water though.",
      "Alfred P. Southwick. What a sideline."
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


  function gamePlayStart() {
    if (turn % 2 === 0) {
      var title1 = $('#title');
      title1.html("PLAYER ONE");
      title1.css('color', '#81C3D7');
      var comments1 = $('#comments');
      comments1.html("QUESTION " + questionnum);
      var commentsbox1 = $('#result');
      commentsbox1.css('background-color', '#81C3D7');
      var questionhead1 = $('#questionheader');
      questionhead1.css('background-color', '#81C3D7');
      var instructionstop1 = $('#instructionslink');
      instructionstop1.css('background-color', '#81C3D7');
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
      var id1 = setInterval(function() {
        var bar1 = $('#playeronebar');
        if (width1 >= 17.85) {
          clearInterval(id1);
        } else {
          width1 += 0.1;
          bar1.css('width', width1 + '%');
          bar1.css('background-color', '#81C3D7');
          var bar2 = $('#playertwobar');
          bar2.css('background-color', '#5D6872');
        }
      }, 50);
      turn++;
    } else {
      var title2 = $('#title');
      title2.html("PLAYER TWO");
      title2.css('color', '#FE5D26');
      var comments2 = $('#comments');
      comments2.html("QUESTION " + questionnum);
      var commentsbox2 = $('#result');
      commentsbox2.css('background-color', '#FE5D26');
      var questionhead2 = $('#questionheader');
      questionhead2.css('background-color', '#FE5D26');
      var instructionstop2 = $('#instructionslink');
      instructionstop2.css('background-color', '#FE5D26');
      var statement2 = $('#questiontext');
      statement2.css('color', '#FE5D26');
      statement2.html(questionsdb.questions[turn]);
      var questionboard2 = $('#questionboard');
      questionboard2.css('border', '2px solid #FE5D26');
      questionnum++;
      var width2 = 1;
      var id2 = setInterval(function() {
        var bar2 = $('#playertwobar');
        if (width2 >= 17.85) {
          clearInterval(id2);
        } else {
          width2 += 0.1;
          bar2.css('width', width2 + '%');
          bar2.css('background-color', '#FE5D26');
          var bar1 = $('#playeronebar');
          bar1.css('background-color', '#5D6872');
        }
      }, 50);
      turn++;
    };
  }

  function gamePlayChoice() {
    if (turn % 2 === 0) {
      var title1 = $('#title');
      title1.html("PLAYER ONE");
      title1.css('color', '#81C3D7');
      var comments1 = $('#comments');
      comments1.html("QUESTION " + questionnum);
      var commentsbox1 = $('#result');
      commentsbox1.css('background-color', '#81C3D7');
      var questionhead1 = $('#questionheader');
      questionhead1.css('background-color', '#81C3D7');
      var instructionstop1 = $('#instructionslink');
      instructionstop1.css('background-color', '#81C3D7');
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
      var id1 = setInterval(function() {
        var bar1 = $('#playeronebar');
        if (width1 >= 17.85) {
          clearInterval(id1);
        } else {
          width1 += 0.1;
          bar1.css('width', width1 + '%');
          bar1.css('background-color', '#81C3D7');
          var bar2 = $('#playertwobar');
          bar2.css('background-color', '#5D6872');
        }
      }, 50);
      turn++;
      checkWin();
    } else {
      var title2 = $('#title');
      title2.html("PLAYER TWO");
      title2.css('color', '#FE5D26');
      var comments2 = $('#comments');
      comments2.html("QUESTION " + questionnum);
      var commentsbox2 = $('#result');
      commentsbox2.css('background-color', '#FE5D26');
      var questionhead2 = $('#questionheader');
      questionhead2.css('background-color', '#FE5D26');
      var instructionstop2 = $('#instructionslink');
      instructionstop2.css('background-color', '#FE5D26');
      var statement2 = $('#questiontext');
      statement2.css('color', '#FE5D26');
      statement2.html(questionsdb.questions[turn]);
      var questionboard2 = $('#questionboard');
      questionboard2.css('border', '2px solid #FE5D26');
      questionnum++;
      var width2 = 1;
      var id2 = setInterval(function() {
        var bar2 = $('#playertwobar');
        if (width2 >= 17.85) {
          clearInterval(id2);
        } else {
          width2 += 0.1;
          bar2.css('width', width2 + '%');
          bar2.css('background-color', '#FE5D26');
          var bar1 = $('#playeronebar');
          bar1.css('background-color', '#5D6872');
        }
      }, 50);
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
      var commentsA = $('#comments');
      commentsA.html("CORRECT!");
      var commentsboxA = $('#result');
      commentsboxA.css('background-color', '#BDC667');
      var outcomeA = setTimeout(gamePlayChoice, 3000);
    } else {
      var commentsB = $('#comments');
      commentsB.html("WRONG! " + questionsdb.explanations[turn - 1]);
      var commentsboxB = $('#result');
      commentsboxB.css('background-color', '#F7A9A8');
      var outcomeB = setTimeout(gamePlayChoice, 3000);
    }
  }



});
// $("#down").click(function(){
//              $(".target").slideDown( 'slow', function(){
//                 $(".log").text('Slide Down Transition Complete');
//              });
//           });
//
//           $("#up").click(function(){
//              $(".target").slideUp( 'slow', function(){
//                 $(".log").text('Slide Up Transition Complete');
//              });
//           });
