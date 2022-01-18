var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var hourRow = $("#selectTable .row .hour");
var textBColor = $("#selectTable .row textarea");
var currentHour = moment().format("HH");
currentHour = parseInt(currentHour);
var militaryToStandardMap = {"9 am":9, "10 am":10, "11 am":11, "12 pm":12, "1 pm":13, "2 pm":14, "3 pm":15, "4 pm":16, "5 pm":17 }

applyColor(); 

// change colors
function applyColor () {

    for (i=0; i < 9; i++) {
        var tableHour = hourRow[i].textContent.toLowerCase();
        var tableMilitaryTime = militaryToStandardMap[tableHour];
        
        if (parseInt(tableMilitaryTime) == currentHour) { 
            textBColor.eq(i).addClass("present")
        } else if (parseInt(tableMilitaryTime) < currentHour) {
            textBColor.eq(i).addClass("past")
        } else{
            textBColor.eq(i).addClass("future")
        } 
    }
}

function oldText () {
    for (i=0; i < 9; i++) {
        var storedText = localStorage.getItem("textArea" + i);   
        if(storedText != null) {
            textBColor.eq(i).text(storedText)
        } else
            textBColor.eq(i).text()
    }
    
}

oldText();

var saveButton = $(".saveBtn");

saveButton.on("click", function() {
    for (i=0; i < 9; i++) {
        var textArea = textBColor.eq(i).val(); 
        localStorage.setItem("textArea" + i, textArea);
    }
});
    
