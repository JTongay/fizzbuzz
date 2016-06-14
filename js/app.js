$(function () {

  for (var i = 1; i <= 100; i++) {
    console.log(i);
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzbuzz');
      $('section').append('fizzbuzz').append('<br>');
    } else if (i % 5 === 0) {
      console.log('buzz');
      $('section').append('buzz').append('<br>');
    } else if (i % 3 === 0) {
      console.log('fizz');
      $('section').append('fizz').append('<br>');
    } else {
      console.log(i);
      $('section').append(i).append('<br>');
    }
  }


});
