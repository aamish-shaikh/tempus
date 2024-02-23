document.addEventListener("DOMContentLoaded", function() {
    const carouselOneInner = document.querySelector(".carousel-2-inner");
    const carouselOneItems = document.querySelectorAll(".carousel-2-item");
    const totalItems = carouselOneItems.length;
    let currentIndex = 0;
  
    function showItem(index) {
      const offset = -index * 100 + "%";
      carouselOneInner.style.transform = `translateX(${offset})`;
    }
  
    function next() {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    }
  
    setInterval(next, 3000); // Auto slide every 3 seconds
  });
  


  