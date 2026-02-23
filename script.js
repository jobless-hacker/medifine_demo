const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");
const bookingDate = document.getElementById("bookingDate");

if (bookingDate) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const today = now.toISOString().split("T")[0];
  bookingDate.min = today;
}

if (form && confirmation) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    confirmation.style.display = "block";
    confirmation.setAttribute("tabindex", "-1");
    confirmation.focus();
  });
}
