// ----------- DECLARE GLOBAL VARIABLES
var currentDayEl = document.querySelector("#currentDay");
var today = dayjs();
var hourEl = document.getElementsByClassName("hour");
var hourElIndex = 0;

// print current date to page
var thisDay = dayjs(today).format('dddd, MMMM D');
currentDayEl.textContent = thisDay;

// ---------- EVALUATE HOUR FUNCTION ---------- //

// RUNS ON PAGE LOAD
// get current time
var currentTime = dayjs().hour();

var evaluateHour = function() {
    var currentHour = hourEl[hourElIndex];
    var currentHourData = currentHour.getAttribute("data-hour");
    console.log(currentHourData);

    // evaluate if current time is = < > time in left hand column
    if (currentTime == currentHourData) {
        console.log("current");
        // format red background
    } else if (currentTime > currentHourData) {
        console.log("past");
        // format grey background
    } else {
        console.log("future");
        // format green background
    }

    // check to see if all hours have been evaluated
    if (hourElIndex < 3){
        hourElIndex++;
        evaluateHour();
    } else {
        return
    }
};

evaluateHour();

// 3 columns (hour, event content, and blue button on the right for saving changes)
// the hours will always be the same
// the structure of the middle column is always the same
// hardcode the three columns 

// all the JS is happening in the middle column and then comparing current time to
// the time on the left -- then change colors depending on outcome of that comparison
// event listener for right hand buttons
// event listener for the events to turn into form inputs

// when save button is clicked the event info is saved to local storage
// how do I want that info stored in ls? common key to pull an array, but 
// tasks will need some way of tracking for what time slot they belong in 




// ON CLICK of timeblock
// turns textarea into input element
// on click of save button
// turn input into textarea
// save value of click event to local storage


