

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

            if (timeBlock < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (timeBlock === currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

  tracKtime();
})