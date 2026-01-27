const text = ["programer", "nonchalant", "Freelancer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typingEffect() {
    if (!isDeleting && charIndex <= text[index].length) {
        currentText = text[index].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
        currentText = text[index].substring(0, charIndex--);
    }

    document.getElementById("typing").textContent = currentText;

    if (charIndex === text[index].length) {
        isDeleting = true;
        setTimeout(() => {}, 1000);
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typingEffect, 120);
}

typingEffect();
document.addEventListener("DOMContentLoaded", function () {

  const menuItems = document.querySelectorAll(".menu li");
  let currentPage = document.querySelector(".page.active");

  if (!currentPage) {
    console.error("Page active tidak ditemukan");
    return;
  }

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      const nextPage = document.getElementById(pageId);
      if (!nextPage || nextPage === currentPage) return;

      // aktifkan menu
      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // slide animasi
      currentPage.classList.remove("active");
      currentPage.classList.add("exit");

      nextPage.classList.add("active");

      setTimeout(() => {
        currentPage.classList.remove("exit");
        currentPage = nextPage;
      }, 500);
    });
  });

});
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll('.menu li');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

