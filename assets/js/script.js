// ----------- DECLARE GLOBAL VARIABLES
var today = dayjs();

var eventContainer = document.querySelector(".container");
// var saveBtn = document.getElementsByClassName("saveBtn");
var currentDayEl = document.querySelector("#currentDay");
var hourEl = document.getElementsByClassName("hour");
var textareaEl = document.getElementsByClassName("description");
var hourElIndex = 0;

console.log(textareaEl);

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

    // grab text area associated with current index
    var currentTextEl = textareaEl[hourElIndex];

    // evaluate if current time is =, <, or > time in left hand column
    if (currentTime == currentHourData) {
        console.log("current");
        // format red background
        currentTextEl.classList = "present description col-8";
    } else if (currentTime > currentHourData) {
        console.log("past");
        // format grey background
        currentTextEl.classList = "past description col-8";
    } else {
        console.log("future");
        // format green background
        currentTextEl.classList = "future description col-8";
    }

    // check to see if all hours have been evaluated
    if (hourElIndex < 8){
        hourElIndex++;
        evaluateHour();
    } else {
        return
    }
};

evaluateHour();


// ON CLICK of Event Container
eventContainer.addEventListener("click", function(event) {

    // check to see if event target has the saveBtn class
    var hasClass = event.target.classList.contains("saveBtn");
    if (hasClass) {
        console.log("click");
        // save current textarea to local storage
    } 
    else {
        console.log("no class");
    }
});


// ---------- INITIAL PSEUDOCODE ---------- //

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

