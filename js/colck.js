$(function() {
    function displayClock() {
        // Create a Date object.
        var localDate = new Date();
        var hours = localDate.getHours();
        var minutes = localDate.getMinutes();
        var seconds = localDate.getSeconds();

        // Formatting time.
        // Display the time in am/pm & 12hrs format.
        var amOrPm = function() {
            if(hours > 12) {
                return "PM";
            } else {
                return "AM";
            }
        }();
        hours = function() {
            if (hours > 12) {
                return hours - 12;
            } else {
                return hours;
            }
        }();
        // Display the time with 2 digit.
        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);
        // Insert the time to HTML div.
        document.getElementById("clock").innerHTML = 
            hours + " : " + minutes + " : " + seconds + " " + amOrPm;
    }
    // Run the clock and refresh every second.
    displayClock();
    setInterval(displayClock, 1000);
});