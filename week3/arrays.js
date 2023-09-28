// ACTIVITY 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
})
document.getElementById("myList").innerHTML = stepsHtml.join();

// ACTIVITY 2

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

// ACTIVITY 3
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// ACITIVITY 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const fruitsSix = fruits.filter((fruit) => fruit.length < 6);

// ACTIVITY 5
const myArray = [12, 34, 21, 54];
const luckNumber = 21;
let luckyIndex = myArray.indexOf(luckNumber);
