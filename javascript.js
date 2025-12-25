var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      breakpoints:{
        '480':{
            slidesPerView: 1,
        },
        '680':{
            slidesPerView: 2,
        },
        '1200':{
            slidesPerView: 3,
        },
      }
    });



// See More Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const seeMoreBtns = document.querySelectorAll('.see-more-btn');
  
  seeMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const cardText = this.previousElementSibling;
      
      if (cardText.classList.contains('expanded')) {
        cardText.classList.remove('expanded');
        this.textContent = 'See More';
      } else {
        cardText.classList.add('expanded');
        this.textContent = 'See Less';
      }
    });
  });
});
