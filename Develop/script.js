var currentDate = moment().format("DD/MM/YYYY");
console.log(currentDate);

$("#currentDay").text(currentDate);
 

console.log($("#9am .description"));

console.log(localStorage.getItem("9am"));
$("#9am .description").val(localStorage.getItem("9am"));


//when a user enters text in textarea and clicks on save buttopn you want an event listenere to listen for that click
// and then grab that value
//and save it to locl sdtorage
//for unique timeline

localStorage.setItem();