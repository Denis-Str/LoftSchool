let timetable = document.querySelector('.contacts__timetable_active');
let mode = document.querySelector('.contacts__mode');

timetable.addEventListener("click", function (evt) {
  evt.preventDefault();
  mode.classList.toggle('contacts__mode_hidden')
});