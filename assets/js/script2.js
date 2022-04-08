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

// document.ready = as soon as HTML loads, run this function
$(document).ready(function() {

    // for each element with a class of time-block
    $(".time-block").each(function() {
        console.log($(this));
        // select sibling element of time-block with class="hour" and get data attribute
        var hourId = $(this).children(".hour").attr("data-hour");
        // get from local storage using hourId key
        var lsData = localStorage.getItem(hourId);
        // if hourId key exists in local storage, assign that value to event description element
        if (lsData) {
            $(this).children(".description").val(lsData);
        }
        else {
            return
        }
    })
});

// ---------- EVALUATE HOUR FUNCTION RUNS ON PAGE LOAD ---------- //

var evaluateHour = function() {
    var currentHour = hourEl[hourElIndex];
    var currentHourData = currentHour.getAttribute("data-hour");
    // console.log(currentHourData);

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
$( "button" ).click(function(event) {
    console.log( "You clicked a button" );

    // this = button, so find button sibling with class of description and grab that value
    var event = $(this).siblings(".description").val();
    // select button sibling with class of hour and grab the data-hour attribute
    var hour = $(this).siblings(".hour").attr("data-hour");

    // set key value pair in local storage
    localStorage.setItem(hour, event);
});    

evaluateHour();