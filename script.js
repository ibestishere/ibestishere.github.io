const themeBtn = document.querySelector(".checkbox");
const body = document.body;

themeBtn.addEventListener("change", () => {
  body.classList.toggle("night");
});
/*
document.querySelectorAll('.plam').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'player/plam/plam.html';
  });

});
*/
