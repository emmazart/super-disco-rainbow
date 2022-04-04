// ----------- DECLARE GLOBAL VARIABLES
var currentDayEl = document.querySelector("#currentDay");
var today = dayjs();


// print current date to page
var thisDay = moment(today).format('dddd, MMMM Do');
currentDayEl.textContent = thisDay;

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

