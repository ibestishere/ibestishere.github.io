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
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const originalHTML = card.innerHTML; // เก็บค่าเดิมของการ์ด
  card.addEventListener('click', () => {
    // ใส่ข้อความใหม่
    card.innerHTML += `<p class="card-message">ยังทำไม่เสร็จ! รอก่อน</p>`;
    // ผ่านไป 5 วิ กลับเป็นค่าเดิม
    setTimeout(() => {
      card.innerHTML = originalHTML;
    }, 5000);
  });
});
