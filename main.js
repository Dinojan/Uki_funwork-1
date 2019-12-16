SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'
});


$(document).ready(function()   {

  SC.stream('/tracks/347351490', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/345527848', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/364718444', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

SC.stream('/tracks/194149990', function(sound) {
 $('#start4').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop4').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/345528518', function(sound) {
 $('#start5').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop5').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/238075643', function(sound) {
 $('#start6').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop6').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/105278929', function(sound) {
 $('#start7').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop7').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/85156351', function(sound) {
 $('#start8').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop8').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});
});
