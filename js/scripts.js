$(document).ready(function() {
  $("#am").click(function() {
    $("#amb").slideToggle();
    $("#bgb").slideUp();
    $("#projectsBody").slideUp();
    $("#hobbyContent").slideUp();
    // $("#me").slideToggle();
  });
  $("#bg").click(function() {
    $("#bgb").slideToggle();
    $("#amb").slideUp();
    $("#projectsBody").slideUp();
    $("#hobbyContent").slideUp();
  });
  // $("#wc").click(function() {
  //   $("#wcb").slideToggle();
  // });
  $("#projects").click(function() {
    $("#projectsBody").slideToggle();
    $("#amb").slideUp();
    $("#bgb").slideUp();
    $("#hobbyContent").slideUp();

  });
  $("#hobbies").click(function() {
    $("#hobbyContent").fadeToggle();
    $("#amb").slideUp();
    $("#bgb").slideUp();
    $("#projectsBody").slideUp();
  });
});