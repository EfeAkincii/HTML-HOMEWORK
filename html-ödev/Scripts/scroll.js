document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".carousel-item a").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); 
      let targetId = this.getAttribute("href").substring(1); 
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        
        let collapseElement = new bootstrap.Collapse(targetElement, {
          toggle: true
        });

        
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      

    });
  });
});
