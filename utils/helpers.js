// flatpickr is a node module for a built in calendar feature with date and time. 
const flatpickr = require('flatpickr');


con = {
    enableTime: true,//allows time option
    dateFormat: "Y-m-d H:i",//UI format
    altInput: true,// allow alt Input to format
    altFormat: "F j, Y (h:S K)" // format reads October 30, 2022(10:00pm).
}
console.log(con);
const idElement = document.querySelector('click', '#party-date');
pickDateTime = flatpickr( idElement, con);

module.exports = pickDateTime;
// this was not working due to an error: document or window is undefined. Saw that Node.js does not understand the window events and it must be wrapped?? Not sure.