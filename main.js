$(document).ready(function() {

  var turn = 0;
  var questionnum = 1;

  var questionsdb = {
    questions: [
      "WDI is easy.", "The weather is great.", "1 + 1 === 3", "The lead actor of World War Z is Tom Cruise."
    ],
    answers: [
      "true", "false", "true", "false"
    ],
  };

  var instrlink = $('#instructionslink');
  var instrtext = $('#instructionstext');
  instrlink.click(function() {
    instrtext.slideToggle(100, 'linear', function() {});
  });

  var start = $('#start');
  start.click(function() {
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
      playertwo.css('background-color', '#DD403A');
      start.html("CLICK ABOVE");
      start.css('font-size', '1.5em');
      start.css('background-color', '#888888');
      var questionboard1 = $('#questionboard');
      questionboard1.css('border', '2px solid #81C3D7');
      var width1 = 1;
      var id1 = setInterval(function() {
        var bar1 = $('#playeronebar');
        if (width1 >= 17.85) {
          clearInterval(id);
        } else {
          width1+= 0.1;
          bar1.css('width', width1 + '%');
          bar1.css('background-color','#81C3D7');
          var bar2 = $('#playertwobar');
          bar2.css('background-color','#5D6872');
        }
      }, 30);
    } else {
      var title2 = $('#title');
      title2.html("PLAYER TWO");
      title2.css('color', '#DD403A');
      var comments2 = $('#comments');
      comments2.html("QUESTION " + questionnum);
      var commentsbox2 = $('#result');
      commentsbox2.css('background-color', '#DD403A');
      var questionhead2 = $('#questionheader');
      questionhead2.css('background-color', '#DD403A');
      var instructionstop2 = $('#instructionslink');
      instructionstop2.css('background-color', '#DD403A');
      var statement2 = $('#questiontext');
      statement2.css('color', '#DD403A');
      statement2.html(questionsdb.questions[turn]);
      var questionboard2 = $('#questionboard');
      questionboard2.css('border', '2px solid #DD403A');
      questionnum++;
      var width2 = 1;
      var id2 = setInterval(function() {
        var bar2 = $('#playertwobar');
        if (width2 >= 17.85) {
          clearInterval(id);
        } else {
          width2+= 0.1;
          bar2.css('width', width2 + '%');
          bar2.css('background-color','#DD403A');
          var bar1 = $('#playeronebar');
          bar1.css('background-color','#5D6872');
        }
      }, 30);
    }
    turn++;
  });

  function clearTheBoard() {
    var cleartheboard = $('#reset');
    cleartheboard.click(function() {
      location.reload();
    });
  }

  clearTheBoard();








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
