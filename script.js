const openDropdown = () => {
  document.getElementById("sites-drop").classList.toggle("show");
};

window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown");
    if (dropdowns.classList.contains("show")) {
      dropdowns.classList.remove("show");
    }
  }
};


const swiper = new Swiper('.swiper', {
  // Optional parameters
  cssMode: true,
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});