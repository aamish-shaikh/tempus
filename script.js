document.addEventListener("DOMContentLoaded", function() {
    const carousellInner = document.querySelector(".carousell-inner");
    const carousellItems = document.querySelectorAll(".carousell-item");
    const totalItems = carousellItems.length;
    let currentIndex = 0;
  
    function showItem(index) {
      const offset = -index * 100 + "%";
      carousellInner.style.transform = `translateX(${offset})`;
    }
  
    function next() {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    }
  
    setInterval(next, 3000); // Auto slide every 3 seconds
  });
  