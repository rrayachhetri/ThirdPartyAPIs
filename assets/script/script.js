var currentDate = moment().format("MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDate);

$().ready(function () {

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var textAreaval = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr('id');

        localStorage.setItem(timeBlock, textAreaval);

    });


    function tracKtime() {

        var currentHour = moment().hour();
        console.log(currentHour);
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id"));
            console.log(timeBlock);
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

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    tracKtime();
});