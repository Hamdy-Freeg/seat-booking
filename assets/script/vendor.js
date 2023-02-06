const movie = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatsCount = document.getElementById("count");
const totalPrice = document.getElementById("total");

let ticketPrice = parseInt(movie.value);
