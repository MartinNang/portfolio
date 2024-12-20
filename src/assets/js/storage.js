//by including the following line of code, we ensure that the javascript is only executed when the HTML is fully loaded
$(document).ready(function() {
    console.log("Ready");
    document.cookie = "username=john2000";;
    console.log(typeof document.cookie);




}); // end document ready