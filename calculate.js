function calculateSemesterGPA() {
    var sum = 0, totalCredits = 0;
    for (var i = 1; i <= 7; i++) {
        var gradeInput = document.getElementById("grade" + i).value;
        if (gradeInput === "") {
            continue;
        }
        var grade = parseFloat(gradeInput);
        if (isNaN(grade) || grade < 0 || grade > 100) {
            alert("Please enter valid grades between 0 and 100");
            return;
        }
        var creditInput = document.getElementById("credit" + i).value;
        var credit = parseFloat(creditInput);
        if (isNaN(credit) || credit <= 0) {
            alert("Please enter valid credit hours");
            return;
        }
        sum += grade * credit;
        totalCredits += credit;
    }
    if (totalCredits === 0) {
        alert("Please enter at least one valid grade and its credit hour");
    } else {
        var gpa = sum / totalCredits;
        var gpa4 = gpa / 25;
        alert("Semester GPA out of 100: " + gpa.toFixed(2) + "%\n" + "Semester GPA out of 4: " + gpa4.toFixed(2));
    }

}

function calculateCumulativeGPA() {
    var cumulativeGPA = parseFloat(document.getElementById("cumulativeGPA").value);
    var passedHours = parseInt(document.getElementById("passedHours").value);

    if (isNaN(cumulativeGPA) || isNaN(passedHours) || passedHours <= 0) {
        alert("Please enter valid cumulative GPA and passed hours.");
        exit();
    }

    var totalQualityPoints = cumulativeGPA * passedHours;

    var qualityPoints = 0;
    var totalCreditHours = 0;

    for (var i = 1; i <= 7; i++) {
        var grade = parseFloat(document.getElementById("grade" + i).value);
        if (!isNaN(grade)) {
            if (grade >= 0 && grade <= 100) {
                var selectElement = document.getElementById("credit" + i);
                var credit = parseFloat(selectElement.options[selectElement.selectedIndex].value);
                if (!isNaN(credit) && credit > 0) {
                    qualityPoints += grade * credit;
                    totalCreditHours += credit;
                }
            } else {
                alert("The grade should range from 0 to 100");
                exit();
            }
        }
    }
    if (totalCreditHours === 0) {
        alert("Please enter at least one valid grade and credit hour.");
        exit();
    }

    var totalPassedHours = passedHours + totalCreditHours;
    var newCumulativeGPA = (totalQualityPoints + qualityPoints) / totalPassedHours;
    alert("Your cumulative GPA: " + newCumulativeGPA.toFixed(2) + "\n" + "Total passed hours with this semester: " + totalPassedHours);
    exit();
}


function calculateIncreaseGPA() {
    var cumulativeGPA = parseFloat(document.getElementById("cumulativeGPA").value); //x
    var passedHours = parseFloat(document.getElementById("passedHours").value); //a
    var wantedGPA = parseFloat(document.getElementById("wantedGPA").value); //z
    var semesterHours = parseFloat(document.getElementById("semesterHours").value); //b

    if (cumulativeGPA <= 100 && cumulativeGPA >= 0) {
        var grade = ((wantedGPA * passedHours) + (wantedGPA * semesterHours) - (cumulativeGPA * passedHours)) / semesterHours;
        if (grade <= 100 && grade >= 0) {
            alert("You should get this Semester: " + grade.toFixed(2) + "%");
            exit();
        } else {
            alert("Sorry it is not possible to get this GPA");
            exit();
        }
    }
    alert("Your Cumulative GPA should range from 0 to 100");
    exit();
}


