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

        
        let topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 630; 
        window.scrollTo({ top: topOffset, behavior: "smooth" });

      }
      

    });
  });
});

let myButton = document.getElementById("scroll-to-the-top");


function ShowScrollButton()
{
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
  {
    myButton.style.display = "block";

  }
  else
  {
    myButton.style.display = "none";
  }
}

function ScrollTop()
{
  
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {ShowScrollButton()};
