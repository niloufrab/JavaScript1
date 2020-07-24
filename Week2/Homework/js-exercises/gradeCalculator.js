'use strict';

//convert the score into a percentage
function gradeCalculator(score) {
  const scorePercentage = Math.round((score / 100) * 100);

  //calculate what grade corresponds with that percentage
  let grade = '';

  if (scorePercentage >= 90 && scorePercentage <= 100) {
    grade = 'A';
  } else if (scorePercentage >= 80 && scorePercentage <= 89) {
    grade = 'B';
  } else if (scorePercentage >= 70 && scorePercentage <= 79) {
    grade = 'C';
  } else if (scorePercentage >= 60 && scorePercentage <= 69) {
    grade = 'D';
  } else if (scorePercentage >= 50 && scorePercentage <= 59) {
    grade = 'E';
  } else if (scorePercentage >= 0 && scorePercentage <= 49) {
    grade = 'F';
  }

  //shows in the command line the result: the grade and the percentage
  console.log(`You got a ${grade} (${scorePercentage}%) !`);
}

//Checking gradeCalculator!
gradeCalculator(97);
gradeCalculator(85);
gradeCalculator(78);
gradeCalculator(60);
gradeCalculator(59);
gradeCalculator(25);
