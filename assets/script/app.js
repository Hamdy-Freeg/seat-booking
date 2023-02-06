populateUI();

// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function UpdateSeclectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsArr = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedSeats", JSON.stringify(seatsArr));

  const selectedLength = selectedSeats.length;

  seatsCount.textContent = selectedLength;
  totalPrice.textContent = selectedLength * ticketPrice;
}

// get data from local storage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movie.selectedIndex = selectedMovieIndex;
  }
}

// movie select event
movie.addEventListener("change", (moviePrice) => {
  ticketPrice = moviePrice.target.value;
  setMovieData(moviePrice.target.selectedIndex, moviePrice.target.value);
  UpdateSeclectedCount();
});

// select your seat function
seats.forEach((seat) =>
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    UpdateSeclectedCount();
  })
);

// initial count and total set
UpdateSeclectedCount();
