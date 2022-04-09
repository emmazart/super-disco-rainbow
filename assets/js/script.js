// ----------- DECLARE GLOBAL VARIABLES ---------- //

var today = dayjs(); // get current day
var thisDay = dayjs(today).format('dddd, MMMM D'); // format current date
var currentTime = dayjs().hour(); // get current hour

var eventContainer = document.querySelector(".container");
var currentDayEl = document.querySelector("#currentDay");
var hourEl = document.getElementsByClassName("hour");
var textareaEl = document.getElementsByClassName("description");
var hourElIndex = 0;

// ---------- DECLARE GLOBAL VARIABLES END ---------- //

// print current date to page
currentDayEl.textContent = thisDay;

// ---------- GET EVENT DETAILS FROM LOCAL STORAGE ---------- //

var getEventDetails = function() {

    // select elements with time-block class
    var timeBlock = document.getElementsByClassName("time-block");
    // for each element with a class of time-block
    // console.log(timeBlock);
    for (i = 0; i < timeBlock.length; i++) {
        console.log(timeBlock[i]);
        // select sibling element of time-block with class="hour" and get data attribute
        var hour = timeBlock[i].children[0].getAttribute("data-hour");
        console.log(hour);
        // get from local storage using hourId key
        var lsData = localStorage.getItem(hour);

        if (lsData) {
            var eventElement = timeBlock[i].children[1];
            eventElement.value = lsData;
            console.log(eventElement.value);
        }
        else {
        }
    };
};

// ---------- EVALUATE HOUR FUNCTION RUNS ON PAGE LOAD ---------- //

var evaluateHour = function() {
    var currentHour = hourEl[hourElIndex];
    var currentHourData = currentHour.getAttribute("data-hour");

    // grab text area associated with current index
    var currentTextEl = textareaEl[hourElIndex];

    // evaluate if current time is =, <, or > time in left hand column
    if (currentTime == currentHourData) {
        // format red background
        currentTextEl.classList = "present description col-8";
    } else if (currentTime > currentHourData) {
        // format grey background
        currentTextEl.classList = "past description col-8";
    } else {
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

// ---------- EVENT LISTENER FOR SAVE BUTTON ---------- //

// listen for click event on save button
eventContainer.addEventListener("click", function(event) {
    
    // check to see if event target has saveBtn class
    var hasClass = event.target.classList.contains("saveBtn");

    if (hasClass) {
        // grab event description sibling of target & grab value
        var targetEl = event.target;
        var event = targetEl.parentNode.children[1].value;

        // grab data-hour attribute from h2 sibling
        var hourInfoEl = targetEl.parentNode.children[0];
        var hour = hourInfoEl.getAttribute("data-hour");

        // set as key value pair to local storage
        console.log(hour, event);
        localStorage.setItem(hour, event);
    }
    else {
        return
    }
});

evaluateHour();
getEventDetails();



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