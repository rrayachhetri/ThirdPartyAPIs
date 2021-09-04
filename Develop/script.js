var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);

$("#currentDay").text(currentDate);
 

console.log($("#9am .description"));

console.log(localStorage.getItem("9am"));
$("#9am .description").val(localStorage.getItem("9am"));

$("#10am .description").val(localStorage.getItem("10am"));

$("#10am .description").val(localStorage.getItem("10am"));
$("#10am .description").val(localStorage.getItem("10am"));
//when a user enters text in textarea and clicks on save buttopn you want an event listenere to listen for that click
// var eventsContainer = [];
// for(i=0, i < 0, i++)
// and then grab that value
//and save it to locl sdtorage
//for unique

// 
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    // console.log(this);
 var textAreaval = $(this).siblings(".description").val();
 var timeBlock = $(this).parent().attr('id');
 console.log(timeBlock);
    localStorage.setItem(timeBlock, textAreaval);
});
