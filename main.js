const navSlide = () => {
   const burger = document.querySelector(".burger");
   const nav = document.querySelector(".navbar");

   burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      burger.classList.toggle("toggle");
   });
};
navSlide();
