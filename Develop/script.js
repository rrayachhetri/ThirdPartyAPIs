

var currentDate = moment().format("MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDate);

$(document).ready(function () {

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var textAreaval = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr('id');

        localStorage.setItem(timeBlock, textAreaval);

    });


    function tracKtime() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).atrr("id").split("hour")[1]);
        })
    }


})