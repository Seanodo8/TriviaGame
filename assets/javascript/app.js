var questions = [{
  ques: "In the movie 'A Christmas Story', what is the only thing Ralphie Parker wants for Christmas?",
  ans: ["Pink Bunny Pajamas", "A Red Ryder BB Gun", "Sleigh", "His Two Front Teeth"],
  name: "bbgun",
  correct: "A Red Ryder BB Gun",
  divClass: ".bbgun"
},
{
  ques: "Who provided the voice of Ebenezer Scrooge in the 2009 animated Christmas movie, 'A Christmas Carol'?",
  ans: ["Tom Cruise", "Jim Carrey", "Matt Damon", "Johnny Depp"],
  name: "christmasCarol",
  correct: "Jim Carrey",
  divClass: ".christmasCarol"
},
{
  ques: "In which Christmas movie does Buddy travel from the North Pole to New York to find his father Walter Hobbs?",
  ans: ["The Santa Claus", "Home For The Holidays", "Elf", "Holiday Madness"],
  name: "elf",
  correct: "Elf",
  divClass: ".elf"
},
{
  ques: "Who starred as Kevin McCallister in 'Home Alone'?",
  ans: ["Edward Furlong", "Joseph Mazzello", "Macaulay Culkin", "Jason James Richter"],
  name: "homeAlone1",
  correct: "Macaulay Culkin",
  divClass: ".homeAlone1"
},
{
  ques: "Edmund Gwenn played Kris Kringle in which 1947 Christmas movie, a role reprised by Richard Attenborough in 1994?",
  ans: ["Miracle On 34th Street", "Christmas Carol", "Kris Kringle", "Open Sleigh"],
  name: "miracle34",
  correct: "Miracle On 34th Street",
  divClass: ".miracle34"
},
{
  ques: "Which black comedy from 2003 features Billy Bob Thornton as a thief who disguises himself as a department store Santa Claus?",
  ans: ["Bad Elf", "The Grinch", "Bad Santa", "Ho-Ho-Holidays"],
  name: "badSanta",
  correct: "Bad Santa",
  divClass: ".badSanta"
},
{
  ques: "Which Christmas movie features Arnold Schwarzenegger desperately trying to get an action figure on Christmas Eve as a gift for his son?",
  ans: ["The Santa Claus", "Christmas", "Love Actually", "Jingle All The Way"],
  name: "jingle",
  correct: "Jingle All The Way",
  divClass: ".jingle"
},
{
  ques: "Which Ghostbusters star played Frank Cross in the 1988 Christmas comedy, 'Scrooged'?",
  ans: ["Adam Sandler", "Bill Murray", "Eddie Murphy", "Dan Aykroyd"],
  name: "scrooged",
  correct: "Bill Murray",
  divClass: ".scrooged"
},
{
  ques: "Which animated television film classic, based on the book by Raymond Briggs, features the song 'Walking In The Air'?",
  ans: ["Snow Day", "Rudolph", "The Snowman", "The North Pole"],
  name: "snowman",
  correct: "The Snowman",
  divClass: ".snowman"
},
{
  ques: "Which animated Christmas movie tells the adventures of Jack Skellington, Halloweentown's pumpkin king?",
  ans: ["Krampus", "Christmas Horror", "Santas Slay", "The Nightmare Before Christmas"],
  name: "nightmare",
  correct: "The Nightmare Before Christmas",
  divClass: ".nightmare"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();

// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
  $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
  $('.container').fadeOut(500);
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  // loop through correctArray & radioName to match html elements & answers
  for (var i = 0; i < 10; i++) {

      if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

          correctAnswers++;
          console.log("this is correct! number:" + i)
      } else {
          wrongAnswers++;
          console.log("this is wrong! number:" + i)
      };
  }
  $('#correctTimesUp').append(correctAnswers);

  // display wrongAnswers
  $('#wrongTimesUp').append(wrongAnswers);
  $('#timesUp').fadeIn(1000).show();

  // alert("Times Up!");
  clearInterval(timer);
  return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

  correctAnswers++;
} else {
  wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

});
