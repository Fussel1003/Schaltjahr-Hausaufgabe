function checkLeapYear() {
    var year = document.getElementById("yearInput").value;
    var resultElement = document.getElementById("result");

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        resultElement.innerText = year + " ist ein Schaltjahr!";
    } else {
        resultElement.innerText = year + " ist kein Schaltjahr.";
    }
}
